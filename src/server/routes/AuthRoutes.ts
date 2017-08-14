import passport from 'passport';
import { Strategy } from 'passport-facebook';
import { } from 'passport-local';
import { } from 'passport-twitter';
import { Router, Request, Response, NextFunction } from 'express';


export default class ActorRoutes{
    getRouter(){
        const router = Router();

        return router;
    }
}