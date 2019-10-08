import {Behavior, Behaviors} from './behaviors/Behavior';
import { v4 } from 'uuid';

export class Entity {
    uuid: string;
    private behaviors: Behavior[];
    constructor(components: Behavior[]) {
        this.uuid = v4();
    }
    getBehavior(type: Behaviors) {
        return this.behaviors.filter(behavior => behavior.type === type);
    }
    addBehavior(behavior: Behavior) {
        this.behaviors.push(behavior);
    }
}

export default Entity;
