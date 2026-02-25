import Actor from './actor.class';

export const MAX_PARTY_MEMBERS = 7;

export interface Party {
	uuid: string;
	members: Actor[];
}

export class PartyImpl implements Party {
	uuid!: string;
	members: Actor[];
	constructor() {
		// Array of Actors
		this.members = [];
	}
	push(member: Actor) {
		this.members.push(member);
	}
}

export default Party;
