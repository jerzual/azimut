import * as express from 'express';

interface Route{
    name:string;
    route(req:express.Request,res:express.Response,err:express.NextFunction);
}
export default Route;