// server entry point
import * as SocketIO from "socket.io";
import * as express from "express";
import methodOverride = require("method-override");
import bodyParser = require("body-parser");
import morgan from "morgan";
import * as winston from "winston";
import * as path from "path";
import * as http from "http";
import * as passport from "passport";
import { cpus } from "os";
import * as mongoose from "mongoose";
import { Database } from "./models/index";
import * as expressSession from "express-session";
import * as sharedSession from "express-socket.io-session";

const env = process.env.NODE_ENV || "development";
const serverPort = process.env.PORT || 5000;
const dbUrl =
  process.env.MONGOLAB_URI ||
  process.env.MONGOHQ_URL ||
  "mongodb://localhost:27017/azimut";

// main app object
export class AzimutServer {
  io: SocketIO.Server;
  app: express.Application;
  server: http.Server;
  db: Database;
  session: any;
  sockets: Array<SocketIO.Socket>;
  constructor(
    app = express(),
    db?: { url: string; options: mongoose.ConnectionOptions }
  ) {
    this.app = app;
    // express app config
    this.app.set("port", serverPort);
    this.app.use(express.static(path.join(process.cwd(), "dist", "www")));
    this.app.use(bodyParser.json());
    this.app.use(methodOverride());
    this.session = expressSession({
      secret: "my-secret",
      resave: true,
      saveUninitialized: true
    });
    this.app.use(this.session);
    this.server = http.createServer(this.app);
    // server start
    this.configureDatabase();
    this.configureSockets();
    this.configureRoutes();
    this.configurePassport();
    // everything not found redirect to index.html (404 is the default view)
    this.app.get("*", (req, res, next) => {
      res.sendFile(path.join(process.cwd(), "dist", "www", "index.html"));
    });
  }
  configureDatabase(): Promise<void> {
    const dbOptions = {
      logging: false
    };
    // sets promises used by mongo, trick to overload typescript readOnly.
    (<any> mongoose).Promise = global.Promise;
    // connect
    return mongoose
      .connect(dbUrl, {
        useMongoClient: true
        /* other options */
      })
      .then(() => {
        console.log(`Succeeded connected to: ${dbUrl}`);
      })
      .catch(err => {
        console.log(`ERROR connecting to:${dbUrl}, ${err}`);
      });
  }
  configurePassport() {
    this.app.use(passport.initialize());
    this.app.use(passport.session());
  }
  configureSockets() {
    this.sockets = [];
    // socket.io config
    this.io = SocketIO();
    this.io.listen(this.server);
    this.io.use(sharedSession(this.session));
    this.io.on("connection", (socket: SocketIO.Socket) => {
      winston.info("Socket connected: ", socket.id);
      socket.on("action", action => {
        if (action.type === "server/hello") {
          winston.info("Got hello data!", action.data);
          socket.emit("action", { type: "message", data: "good day from server!" });
        }
      });
      socket.on("disconnected", action => {
        winston.info("Socket disconnect: ", socket.id, action.data);
        const i = this.sockets.indexOf(socket);
        this.sockets.splice(i, 1);
      });
      this.sockets.push(socket);
    });
  }
  configureRoutes() {
    this.app.use(
      "/api/cities",
      (req: express.Request, res: express.Response) => {
        winston.info(`${req.method} ${req.path}`);
      }
    );
    this.app.use(
      "/api/actors",
      (req: express.Request, res: express.Response) => {
        winston.info(`${req.method} ${req.path}`);
      }
    );
    this.app.use(
      "/api/items",
      (req: express.Request, res: express.Response) => {
        winston.info(`${req.method} ${req.path}`);
      }
    );
    this.app.use(
      "/api/parties",
      (req: express.Request, res: express.Response) => {}
    );
    this.app.use(
      "/api/players",
      (req: express.Request, res: express.Response) => {
        winston.info(`${req.method} ${req.path}`);
      }
    );
    this.app.use(
      "/api/turns",
      (req: express.Request, res: express.Response) => {
        winston.info(`${req.method} ${req.path}`);
        res.send(JSON.stringify({ turns: [{ id: 1 }] }));
      }
    );
  }

  private onError(error: NodeJS.ErrnoException): void {
    if (error.syscall) {
      throw error;
    }

    let port = process.env.PORT;
    let bind = `Port ${port}`;

    switch (error.code) {
      case "EACCES":
        winston.error(`[EACCES] ${bind} requires elevated privileges.`);
        process.exit(1);
        break;
      case "EADDRINUSE":
        winston.error(`[EADDRINUSE] ${bind} is already in use.`);
        process.exit(1);
        break;
      default:
        throw error;
    }
  }

  start() {
    this.server.listen(this.app.get("port"), "0.0.0.0", err => {
      err
        ? winston.error("Azimut server failed to start", err)
        : winston.info(`Azimut server started on ${serverPort}`);
    });
    this.server.on("error", error => this.onError(error));
  }

  stop(): void {
    this.server.close();
    process.exit(0);
  }
}

// routes:
let server = new AzimutServer();
// don't start the server if module is imported (tests)
if(!module.parent) {
  server.start();
}
process.on("SIGINT", () => {
  server.stop();
});
export default server.app;