import { Action } from './Action';
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
