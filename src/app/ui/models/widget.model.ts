/**
 * widget interface data
 */
export interface Widget {
	position?: { x: number; y: number };
	closed?: boolean;
	anchored?: boolean;
	dimension?: { w: number; height: number };
}
