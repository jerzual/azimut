import { Database, Models } from '../models/index';

export class AbstractDBService{
    protected models: Models;
    constructor(db:Database){
        this.models = db.getModels();
    }
}
export default AbstractDBService;