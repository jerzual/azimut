import { Models, Database } from '../models/index';
import { ActionAttributes, ActionModel } from '../models/ActionModel';

export default class ActionService {

    protected models: Models;
    constructor(db: Database) {
        this.models = db.getModels();
    }
    createAction(action: ActionAttributes) {

    }
}