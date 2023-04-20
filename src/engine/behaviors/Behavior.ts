// this will allow for behaviors to know each others.
import { nanoid } from 'nanoid';

export const enum Behaviors {
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
export interface Behavior {
	uuid: string;
	execute?: () => void;
	type: Behaviors;
	agent: Agent;
}

export class ConcreteBehavior implements Behavior {
	constructor(
		public uuid: string,
		public execute: () => void,
		public type: Behaviors,
		public agent: Agent,
	) {}
}

export function behaviorFactory(
	execute: () => void,
	type: any,
	agent: any,
): Behavior {
	return new ConcreteBehavior(nanoid(), execute, type, agent);
}
