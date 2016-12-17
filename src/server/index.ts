// server entry point
import * as IO  from "socket.io";
import * as express from "express";

// express app config
const app:express.Application = express();
app.use(express.static('./www'));
const server = app.listen(3000);

// socket.io config
const io = IO();
io.attach(server);
io.on("connection", function(socket:SocketIO.Socket){
    console.log("Socket connected: " + socket.id);
    socket.on("action", (action) => {
        if (action.type === "server/hello") {
            console.log("Got hello data!", action.data);
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
        console.log('index request');
    }
    getSettings(req:express.Request,res: express.Response, next:express.NextFunction) {
        console.log('settings request');
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
