import Actor from './Actor';

const MAX_PARTY_MEMBERS = 7;

export interface Party {
	uuid: string;
	members: Array<Actor>;
}

export class PartyImpl implements Party {
	uuid: string;
	members: Array<Actor>;
	constructor() {
		// Array of Actors
		this.members = [];
	}
	push(member) {
		this.members.push(member);
	}
}

export default Party;
