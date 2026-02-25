import { BiomeType } from '../../engine/biome.enum';
import { City } from '../city.class';
import { LevelBuilder } from './level.builder';
import RandomBuilder from './random.builder';

export default class CityBuilder extends RandomBuilder {
	city: City;
	constructor({ seed }: { seed: string }) {
		super({ seed });
		this.city = new City({ width: 512, height: 512 });
	}

	generateTerrain(): this {
		const subSeed = this.rng.string();
		const level = new LevelBuilder({
			seed: subSeed,
			width: this.city.width,
			height: this.city.height,
		})
			.generateElevation()
			.build();

		this.city.levels.push(level);
		return this;
	}

	placeBiomes(): this {
		const terrain = this.city.levels[0];
		if (!terrain) return this;

		for (const tile of terrain.tiles) {
			const e = tile.elevation ?? 0;
			if (e < 0.15) {
				tile.biome = BiomeType.Swamp;
			} else if (e < 0.3) {
				tile.biome = BiomeType.Desert;
			} else if (e < 0.45) {
				tile.biome = BiomeType.Country;
			} else if (e < 0.6) {
				tile.biome = BiomeType.Residential;
			} else if (e < 0.75) {
				tile.biome = BiomeType.Urban;
			} else if (e < 0.9) {
				tile.biome = BiomeType.Downtown;
			} else {
				tile.biome = BiomeType.Airport;
			}
		}

		return this;
	}

	digMainRoads(): this {
		// TODO: implement
		return this;
	}

	build() {
		return this.city;
	}
}
