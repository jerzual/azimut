import { Action } from './Action';
/**
 * A turn
 */
export interface Turn {
    playerActions: Array<Action>;
    createdAt?: Date;
}
export class TurnImpl implements Turn {
    playerActions: Array<Action>;

}
export default Turn;
