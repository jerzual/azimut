import * as actor from '../actions/ActorActions';
/**
 * should switch what actions are available to the player when.
 */
export default function actionReducer(state = {}, action){
    switch(action.type){
        case actor.ACTOR_DIED:
        case actor.ACTOR_LEFT:
        case actor.ACTOR_MOVED:
    }
    return state;
}