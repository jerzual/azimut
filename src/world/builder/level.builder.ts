import { makeNoise2D } from 'fast-simplex-noise';
import Level from '../../engine/level.interface';
import Tile, { TileType } from '../../engine/tile.class';
import RandomBuilder from './random.builder';

export class LevelBuilder extends RandomBuilder {
	width: number;
	height: number;
	scale: number;
	tiles: Tile[] = [];

	constructor({
		seed,
		width,
		height,
		scale = 0.02,
	}: {
		seed: string;
		width: number;
		height: number;
		scale?: number;
	}) {
		super({ seed });
		this.width = width;
		this.height = height;
		this.scale = scale;
	}

	generateElevation(): this {
		const noise2D = makeNoise2D(() => this.rng.random());
		this.tiles = [];

		for (let y = 0; y < this.height; y++) {
			for (let x = 0; x < this.width; x++) {
				const raw = noise2D(x * this.scale, y * this.scale);
				const elevation = (raw + 1) / 2;

				this.tiles.push({
					x,
					y,
					elevation,
					type: TileType.FLOOR,
					walkable: true,
					diggable: false,
				});
			}
		}

		return this;
	}

	build(): Level {
		return {
			tiles: this.tiles,
			width: this.width,
			height: this.height,
			currentPlayers: 0,
		};
	}
}
