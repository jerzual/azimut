import Actor from "./Actor";

const MAX_PARTY_MEMBERS = 7;

export default class Party {
    uuid: string;
    members: Array<Actor>;
    constructor() {
        // Array of Actors
        this.members = [];
    }
    push(member){
        this.members.push(member);
    }
}
