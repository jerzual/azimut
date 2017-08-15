import { CityRecord, CityModel } from '../models/CityModel';
import { Database, Core } from '../models/index';

export class CityService{
    models: Core;
    constructor(db: Database) {
        this.models = db.getModels();
    }
    getOneById(id:String):Promise<CityModel | null> {
        return CityRecord.findById(id).exec();
    }
}

export default CityService;