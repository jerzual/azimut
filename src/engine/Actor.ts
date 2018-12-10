import Item from './Item';
import { Entity } from './Entity';
import { Action } from './Action';
import { v4 } from 'uuid';

export interface Actor{
    uuid: string;
    actionPoints: number;
    life: number;
    items: Array<Item>;
    actionsQueue: Array<Action>;
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
    actionsQueue: Array<Action>;
    status: ActorStatus;
    constructor(clone) {
        super(clone);
        this.actionPoints = 10;
        this.life = 1;
        this.actionsQueue = [];
        this.items = [];
        this.status = ActorStatus.IDLING;
        Object.assign(this, clone);
    }
}

export function actorFactory(): Actor {
    return new ActorImpl({
        uuid: v4()
    });
}

export default Actor;