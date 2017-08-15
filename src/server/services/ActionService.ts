import { Core, Database } from '../models/index';
import { Action } from '../../engine/Action';
import { ActionRecord, ActionModel } from '../models/ActionModel';

export class ActionService {

    protected models: Core;
    constructor(db: Database) {
        this.models = db.getModels();
    }
    createAction(action: Action): Promise<ActionModel | null> {
        return ActionRecord.create(action);
    }
}

export default ActionService;