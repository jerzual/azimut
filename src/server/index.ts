// server entry point
import * as IO from "socket.io";
import * as express from "express";
import methodOverride = require("method-override");
import bodyParser = require("body-parser");
import morgan from "morgan";
import * as winston from "winston";
import * as path from "path";
import * as http from "http";
import * as cluster from "cluster";
import { Worker } from "cluster";
import * as passport from "passport";
import { cpus } from 'os';
import * as Sequelize from "sequelize";
import { Models, Database } from './models/index';

const env = process.env.NODE_ENV || "development";
const serverPort = process.env.PORT || 5000;
const dbUrl = process.env.DATABASE_URL || 'postgres://plague:plague@localhost:5432/plague';

// main app object
export default class PlagueServer {
    io: SocketIO.Server;
    app: express.Application;
    server: http.Server;
    sequelize: Sequelize.Sequelize;
    db: Database;
    constructor(app = express(), db?: { url: string, options: Sequelize.Options }) {
        this.app = app;
        // express app config
        this.app.set('port', serverPort);
        this.app.use(express.static(path.join(process.cwd(), 'dist', 'www')));
        this.app.use(bodyParser.json());
        this.app.use(methodOverride());
        this.app.get('*',(req,res,next)=>{
            res.sendFile(path.join(process.cwd(), 'dist', 'www', 'index.html'));
        });
        this.server = http.createServer(this.app);
        // server start
        this.db = this.configureDatabase();
        this.configureSockets();
        // this.configureRoutes();
        this.configurePassport();



    }
    configureDatabase(): Database {

        const dbOptions = {
            logging: true,
        };
        this.sequelize = new Sequelize(dbUrl, dbOptions);
        return new Database(this.sequelize);
    }
    configurePassport() {
        this.app.use(passport.initialize());
        this.app.use(passport.session());
    }
    configureSockets() {
        // socket.io config
        this.io = IO();
        this.io.attach(this.server);
        this.io.on("connection", function (socket: SocketIO.Socket) {
            winston.info("Socket connected: ", socket.id);
            socket.on("action", (action) => {
                if (action.type === "server/hello") {
                    winston.info("Got hello data!", action.data);
                    socket.emit("action", { type: "message", data: "good day!" });
                }
            });
        });
    }
    configureRoutes() {

        this.app.use('/api/cities', (
            req: express.Request, res: express.Response) => {
            winston.info(`${req.method} ${req.path}`);
        });
        this.app.use('/api/actors', (
            req: express.Request, res: express.Response) => {
            winston.info(`${req.method} ${req.path}`);

        });
        this.app.use('/api/items', (
            req: express.Request, res: express.Response) => {
            winston.info(`${req.method} ${req.path}`);

        });
        this.app.use('/api/parties', (
            req: express.Request, res: express.Response) => {

        });
        this.app.use('/api/players', (
            req: express.Request, res: express.Response) => {

            winston.info(`${req.method} ${req.path}`);
        });
        this.app.use('/api/turns', (
            req: express.Request, res: express.Response) => {

            winston.info(`${req.method} ${req.path}`);
            res.send(JSON.stringify({turns:[{id:1}]}))
        });
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
    };

    private onListening(): void {
        let address = this.server.address();
        let bind = `port ${address.port}`;
        winston.info(`Listening on ${bind}.`);
    };
    start() {

        const numCPUs = cpus().length;

        if (cluster.isMaster) {
            this.sequelize.sync(
                { force: true, logging: winston.info }
            ).then(
                (result) => {
                    winston.info('Sequelize initialized', result);
                    for (var i = 0; i < numCPUs; i++) {
                        cluster.fork();
                    }
                    cluster.on('exit', (worker, code, signal) => {
                        winston.warn(`worker ${worker.process.pid} died`);
                    });
                    cluster.on("listening", (worker: Worker, address: any) => {
                        winston.info(`Worker ${worker.process.pid} connected to port ${address.port}.`);
                    });
                }
                ).catch((error: Error) => {
                    winston.error(error.message);
                });
        } else {
            this.server = this.app.listen(
                this.app.get('port'),
                '0.0.0.0',
                (err) => {
                    (err)
                        ? winston.error('Plague server failed to start', err)
                        : winston.info(`Plague server started on ${serverPort}`);

                }
            );
            this.server.on("error", error => this.onError(error));
            this.server.on("listening", () => this.onListening());
        }
    }

    stop(): void {
        this.server.close();
        process.exit(0);
    }
}

// routes:
let server = new PlagueServer();
server.start();
process.on("SIGINT", () => {
    server.stop();
});
