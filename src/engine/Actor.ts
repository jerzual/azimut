import Item from './Item';
import { Entity } from './Entity';
import { Actor } from './Action';

export interface Actor{
    actionPoints: number;
    life: number;
    items: Array<Item>;
    actionsQueue: Array<Actor>;
    status: ActorStatus;
}

export enum ActorStatus {
    PATROLLING,
    FIGHTING,
    IDLING,
    DEAD
}

export class ActorImpl extends Entity implements Actor {
    uuid:string;
    //
    actionPoints: number;
    life: number;
    items: Array<Item>;
    actionsQueue: Array<Actor>;
    status: ActorStatus;
    constructor(clone) {
        super();
        this.actionPoints = 10;
        this.life = 1;
        this.actionsQueue = [];
        this.items = [];
        this.status = ActorStatus.IDLING;
    }
}
export default Actor;