import ActionService from '../services/ActionService';
import {Router, Request, Response} from 'express';

export default class MessagesRoutes{
    constructor(actionService:ActionService){

    }
    getRouter():Router{
        const router = Router();
        // 
        return router;
    }
}