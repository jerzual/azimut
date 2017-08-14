import { ActorModel, ActorRecord} from '../models/ActorModel';
import ActorService from '../services/ActorService';
import {Router, Request, Response, NextFunction } from 'express';


export default class ActorRoutes{
    getRouter(){
        const router = Router();

        return router;
    }
}