import Item from './Item';
import { Entity } from './Entity';
import { Action } from './Action';

export interface Actor{
    actionPoints: number;
    isAlive: boolean;
    items: Array<Item>;
    actionsQueue: Array<Action>;
}
export class ActorImpl extends Entity implements Actor {
    uuid:string;
    //
    actionPoints: number;
    isAlive: boolean;
    items: Array<Item>;
    actionsQueue: Array<Action>;
    constructor(clone) {
        super();
        this.actionPoints = 10;
        this.isAlive = true;
        this.actionsQueue = [];

        this.items = [];
    }
}
export default Actor;