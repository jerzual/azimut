import { Behavior, Behaviors } from './behaviors/Behavior';
import { nanoid } from 'nanoid';

export class Entity {
	uuid: string;
	private behaviors: Behavior[] = [];
	constructor() {
		this.uuid = nanoid();
	}
	getBehavior(type: Behaviors) {
		return this.behaviors.filter((behavior) => behavior.type === type);
	}
	addBehavior(behavior: Behavior) {
		this.behaviors.push(behavior);
	}
}

export default Entity;
