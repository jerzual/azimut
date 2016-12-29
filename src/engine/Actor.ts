import Item from './Item';
import { Entity } from './Entity';
import { Action } from './Action';

export default class Actor extends Entity {
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
