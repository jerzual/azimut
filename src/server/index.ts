// server entry point
import * as IO from "socket.io";
import * as express from "express";
import methodOverride = require("method-override");
import bodyParser = require("body-parser");
import morgan from "morgan";
import * as winston from "winston";
import * as path from "path";
import * as cluster from "cluster";
import { cpus } from 'os';
import * as Sequelize from "sequelize";

const env = process.env.NODE_ENV || "development";
const serverPort = process.env.PORT || 5000;
const dbUrl = process.env.DATABASE_URL || 'postgres:/localhost:5432/plague';

const numCPUs = cpus().length;

if (cluster.isMaster) {
    for (var i = 0; i < numCPUs; i++) {
        cluster.fork();
    }
    cluster.on('exit', (worker, code, signal) => {
        winston.warn(`worker ${worker.process.pid} died`);
    });
} else {

    // express app config
    const app: express.Application = express();
    app.set('port', serverPort);
    app.use(express.static(path.join(__dirname,'www')));
    app.use(bodyParser.json());
    app.use(methodOverride());

    // sequelize config
    const server = app.listen(
        app.get('port'),
        '0.0.0.0',
        (err) => {
            (err)
                ? winston.error('Plague server failed to start', err)
                : winston.info(`Plague server started on ${serverPort}`);

        });

    const db = new Sequelize(dbUrl);
    db.sync().then(
        (result) => {
            winston.debug('Sequelize initialized', result);
        }).catch(
        (err) => {
            winston.error('Sequelize error : ', err);
        });

    // socket.io config
    const io = IO();
    io.attach(server);
    io.on("connection", function (socket: SocketIO.Socket) {
        winston.info("Socket connected: ", socket.id);
        socket.on("action", (action) => {
            if (action.type === "server/hello") {
                winston.info("Got hello data!", action.data);
                socket.emit("action", { type: "message", data: "good day!" });
            }
        });
    });

    class PlagueRoutes {
        app: express.Application;
        constructor(app: express.Application) {
            this.app = app;
            app.get('/', this.getIndex);
            // app.get('/settings', this.getSettings);
            // app.get('/game', this.getGame);
        }
        getIndex(req: express.Request, res: express.Response, next: express.NextFunction) {
            winston.info('index request');
            res.sendFile(path.join(__dirname, 'www','index.html'));
        }
        getSettings(req: express.Request, res: express.Response, next: express.NextFunction) {
            winston.info('settings request');
        }
        putSettings(req: express.Request, res: express.Response, next: express.NextFunction) {

        }

    }
    // routes:
    new PlagueRoutes(app);
    // models
    //Hero
    //Party(Session/channel)
    //Turn
    //Actions
    //Scores
    //Items
    //City
    //Tiles
}