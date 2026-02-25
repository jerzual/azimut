import Tile from '../engine/Tile';
import Level from '../engine/Level';

const MIN_CITY_SIZE = 512;

export interface City {
	levels: Level[];
	width: number;
	height: number;
}

export class City {
	levels: Level[];
	width: number;
	height: number;
	constructor({ width, height }: { width?: number; height?: number } = {}) {
		this.levels = [];
		this.width = width || MIN_CITY_SIZE;
		this.height = height || MIN_CITY_SIZE;
	}
}

export default City;
