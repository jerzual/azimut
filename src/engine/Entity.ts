import {Behavior, Behaviors} from "./behaviors/Behavior";
export class Entity{
    uuid: string;
    private behaviors:Behavior[];
    constructor(){
    }
    getBehavior(type:Behaviors){
        return null;
    }
    addBehavior(behavior:Behavior){
        this.behaviors.push(behavior);
    }
}

export default Entity;