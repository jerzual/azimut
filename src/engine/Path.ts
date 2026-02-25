/*
a Path encapsulate an array of tiles, and the currentLocation along it
 */
import Tile from './Tile';

export class Path {
	// array of positions
	tiles: Tile[];
	currentIndex: number;
	loops: boolean;
	constructor() {
		this.tiles = [];
		this.currentIndex = 0;
		this.loops = false;
	}
}
