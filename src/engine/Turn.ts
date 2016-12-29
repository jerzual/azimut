import { Action } from './Action';
/**
 * A turn 
 */
export interface Turn {
    playerActions:Array<Action>;

}
export class TurnImpl implements Turn{
    playerActions:Array<Action>;

}
export default Turn;
