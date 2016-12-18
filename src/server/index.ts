// server entry point
import * as IO  from "socket.io";
import * as express from "express";
import morgan from "morgan";
import * as winston from "winston";

const serverPort = process.env.PORT || 5000;
// express app config
const app:express.Application = express();
app.use(express.static('./www'));
const server = app.listen(serverPort, '0.0.0.0', (err)=>{
    if(err){
        winston.error('Plague server failed to start', err);
    }else{
        winston.info(`Plague server started on ${serverPort}`);
        winston.info(`environment:`, process.env);
    }
});

// socket.io config
const io = IO();
io.attach(server);
io.on("connection", function(socket:SocketIO.Socket){
    winston.info("Socket connected: ", socket.id);
    socket.on("action", (action) => {
        if (action.type === "server/hello") {
            winston.info("Got hello data!", action.data);
            socket.emit("action", {type:"message", data:"good day!"});
        }
    });
});

class PlagueRoutes{
    app:express.Application;
    constructor(app:express.Application){
        this.app = app;
        app.get('/', this.getIndex);
        app.get('/settings', this.getSettings);
        // app.get('/game', this.getGame);
    }
    getIndex(req: express.Request, res: express.Response, next: express.NextFunction){
        winston.info('index request');
    }
    getSettings(req:express.Request,res: express.Response, next:express.NextFunction) {
        winston.info('settings request');
    }
    putSettings(req:express.Request,res: express.Response, next:express.NextFunction) {

    }

}
// routes:
new PlagueRoutes(app) ;
// models
//Hero
//Party(Session/channel)
//Turn
//Actions
//Scores
//Items
//City
//Tiles
