// this will allow for behaviors to know each others.
import { v4 } from 'uuid';

export const enum Behaviors{
    EnvironmentAware,
    Fightable,
    Droppable,
    Pickupable,
    Pathfollower,
    ActionPoints,
    HasInventory,
    HasHealth,
}
/** Agent  holds the state of a behavior */
export interface Agent {
    state?: any[];
    params?: any[];
}
/** behavior required fields */
export interface Behavior{
    uuid: string;
    execute?: Function;
    type: Behaviors;
    agent: Agent;
}
export class ConcreteBehavior implements Behavior{
    constructor(
        public uuid: string,
        public execute: Function,
        public type: Behaviors,
        public agent: Agent,
    ){

    }
}

export function behaviorFactory(execute: Function, type, agent: any): Behavior {
    return new ConcreteBehavior(v4(),execute, type, agent);
}