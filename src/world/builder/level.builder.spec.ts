import { describe, expect, it } from 'vitest';
import { LevelBuilder } from './level.builder';

describe('LevelBuilder', () => {
	const seed = 'test-seed';
	const width = 64;
	const height = 64;

	it('should generate tiles with correct grid dimensions', () => {
		const level = new LevelBuilder({ seed, width, height })
			.generateElevation()
			.build();

		expect(level.tiles.length).toBe(width * height);
		expect(level.width).toBe(width);
		expect(level.height).toBe(height);
	});

	it('should produce elevation values in [0, 1] range', () => {
		const level = new LevelBuilder({ seed, width, height })
			.generateElevation()
			.build();

		for (const tile of level.tiles) {
			expect(tile.elevation).toBeGreaterThanOrEqual(0);
			expect(tile.elevation).toBeLessThanOrEqual(1);
		}
	});

	it('should be deterministic with the same seed', () => {
		const level1 = new LevelBuilder({ seed, width, height })
			.generateElevation()
			.build();
		const level2 = new LevelBuilder({ seed, width, height })
			.generateElevation()
			.build();

		for (let i = 0; i < level1.tiles.length; i++) {
			expect(level1.tiles[i].elevation).toBe(level2.tiles[i].elevation);
		}
	});

	it('should produce different output for different seeds', () => {
		const level1 = new LevelBuilder({ seed: 'seed-a', width, height })
			.generateElevation()
			.build();
		const level2 = new LevelBuilder({ seed: 'seed-b', width, height })
			.generateElevation()
			.build();

		const hasDifference = level1.tiles.some(
			(tile, i) => tile.elevation !== level2.tiles[i].elevation,
		);
		expect(hasDifference).toBe(true);
	});
});
