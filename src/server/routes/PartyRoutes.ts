import { PartyModel, PartyRecord } from '../models/PartyModel';
import PartyService from '../services/PartyService';
import {Router, Request, Response, NextFunction } from 'express';

class PartyRoutes{
    partyService:PartyService;
    createParty(req:Request, res:Response, next:NextFunction){
        //this.partyService.create({});
    }
    getRouter(){
        const router = Router();
        router.post('/party', this.createParty)
        router.get('/party/:partyId', this.createParty)
    }
}
export default PartyRoutes;