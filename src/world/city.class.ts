import Tile from '../engine/Tile';
import Level from '../engine/Level';

const MIN_CITY_SIZE = 512;
export interface City {
	levels: Array<Level>;
	width: number;
	height: number;
}
export class City {
	levels: Array<Level>;
	width: number;
	height: number;
	constructor({ width, height }) {
		this.levels = [];
		this.width = width || MIN_CITY_SIZE;
		this.height = height || MIN_CITY_SIZE;
	}
}

export default City;
