export const ACTOR_DIED = 'ACTOR_DIED';
export const ACTOR_MOVED = 'ACTOR_DIED';
export const ACTOR_LEFT = 'ACTOR_LEFT';
export const PICKUP_ITEM = 'PICKUP_ITEM';
export const ITEM_PICKED_UP = 'ITEM_PICKED_UP';

export default class ActorActions{
    static actorDied(actor) {
        return {
            type: ACTOR_DIED,
        }
    }
    static actorJoined(){

    }
    static actorMoved(){
        return {

        }
    }
    static moveActor(){

    }
}