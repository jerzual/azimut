import { CityModel, CityAttributes} from '../models/CityModel';
import CityService from '../services/CityService';
import {Router, Request, Response, NextFunction } from 'express';


export default class CityRoutes{
    getRouter(){
        const router = Router();
        
        return router;
    }
}