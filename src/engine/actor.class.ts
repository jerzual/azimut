import Item from './item.class';
import { Entity } from './entity.class';
import { Action } from './action.class';
import { nanoid } from 'nanoid';

export interface Actor {
	uuid: string;
	actionPoints: number;
	life: number;
	items: Item[];
	actionsQueue: Action[];
	status: ActorStatus;
}

export enum ActorStatus {
	PATROLLING,
	FIGHTING,
	IDLING,
	DEAD,
}

export class ActorImpl extends Entity implements Actor {
	declare uuid: string;
	//
	actionPoints: number;
	life: number;
	items: Item[];
	actionsQueue: Action[];
	status: ActorStatus;
	constructor(clone: Partial<ActorImpl>) {
		super();
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
		uuid: nanoid(),
	});
}

export default Actor;
