export const ACTOR_DIED = 'ACTOR_DIED';
export const ACTOR_MOVED = 'ACTOR_MOVED';
export const MOVE_ACTOR = 'MOVE_ACTOR';
export const ACTOR_JOINED = 'ACTOR_JOINED';
export const ACTOR_LEFT = 'ACTOR_LEFT';
export const PICKUP_ITEM = 'PICKUP_ITEM';
export const ITEM_PICKED_UP = 'ITEM_PICKED_UP';

export default class ActorActions {
  static actorDied(actor) {
    return {
      type: ACTOR_DIED,
    };
  }
  static actorJoined() {
    return {
      type: ACTOR_JOINED,
    };
  }
  static actorMoved() {
    return {
      type: ACTOR_JOINED,
    };
  }
  static moveActor() {
    return {
      type: MOVE_ACTOR,
    };
  }
}
