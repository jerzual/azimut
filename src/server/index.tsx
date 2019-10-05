import * as express from "express";
import { renderToString } from "inferno-server";
import path = require("path");
import App from "../views/components/App";
const server = express();
const port = process.env.PORT || 3001;

server.use(express.json());
server.use(express.urlencoded({ extended: false }));
server.use("/static", express.static(path.resolve("./dist/client")));

server.get("/", (req, res) => {
   const wrapper = (
         <App />
   );
   res.send(`
   <!doctype html>
   <html>
       <head>
           <title>My Isomorphic App</title>
       </head>
       <body>
           <div id='root'>${renderToString(wrapper)}</div>
           <script src='./static/bundle.js'></script>
       </body>
   </html>
`);
});
let Server = server.listen(port, () => {
   console.log(`http://localhost:${port}`);
});

// Used to restart server by fuseBox
export async function shutdown() {
   Server.close();
   Server = undefined;
}
