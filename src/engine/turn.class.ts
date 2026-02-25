import { Action } from './action.class';
/**
 * A turn
 */
export interface Turn {
	playerActions: Action[];
	createdAt?: Date;
}
export class TurnImpl implements Turn {
	playerActions: Action[];
}
export default Turn;
