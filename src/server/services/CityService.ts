import {Models, Database} from '../models/index';

export default class CityService{
    protected models: Models;
    constructor(db: Database) {
        this.models = db.getModels();
    }
}