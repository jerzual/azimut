import { describe, expect, it } from 'vitest';
import { BiomeType } from '../../engine/biome.enum';
import CityBuilder from './city.builder';

describe('CityBuilder', () => {
	const seed = 'test-city-seed';

	it('should produce a city with one level after generateTerrain', () => {
		const city = new CityBuilder({ seed }).generateTerrain().build();

		expect(city.levels.length).toBe(1);
		expect(city.levels[0].tiles.length).toBe(city.width * city.height);
	});

	it('should assign elevation and biome to all tiles', () => {
		const builder = new CityBuilder({ seed });
		builder.city.width = 64;
		builder.city.height = 64;

		const city = builder.generateTerrain().placeBiomes().build();

		const allBiomeValues = Object.values(BiomeType).filter(
			(v) => typeof v === 'number',
		);

		for (const tile of city.levels[0].tiles) {
			expect(tile.elevation).toBeGreaterThanOrEqual(0);
			expect(tile.elevation).toBeLessThanOrEqual(1);
			expect(tile.biome).toBeDefined();
			expect(allBiomeValues).toContain(tile.biome);
		}
	});

	it('should be deterministic with the same seed', () => {
		const builder1 = new CityBuilder({ seed });
		builder1.city.width = 64;
		builder1.city.height = 64;
		const city1 = builder1.generateTerrain().placeBiomes().build();

		const builder2 = new CityBuilder({ seed });
		builder2.city.width = 64;
		builder2.city.height = 64;
		const city2 = builder2.generateTerrain().placeBiomes().build();

		const tiles1 = city1.levels[0].tiles;
		const tiles2 = city2.levels[0].tiles;

		for (let i = 0; i < tiles1.length; i++) {
			expect(tiles1[i].elevation).toBe(tiles2[i].elevation);
			expect(tiles1[i].biome).toBe(tiles2[i].biome);
		}
	});
});
