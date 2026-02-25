import { describe, it, expect } from 'vitest';
import { createTerrainTexture } from './terrain-texture.util';
import { BiomeType } from '../../../engine/biome.enum';
import { BIOME_COLORS_RGB } from '../../../constants/biome-colors.const';
import type Level from '../../../engine/level.interface';
import type { Tile } from '../../../engine/tile.class';
import { TileType } from '../../../engine/tile.class';
import { NearestFilter } from 'three';

function makeTile(x: number, y: number, biome?: BiomeType): Tile {
	return {
		x,
		y,
		type: TileType.FLOOR,
		walkable: true,
		diggable: false,
		biome,
	};
}

describe('createTerrainTexture', () => {
	it('should create a DataTexture with correct dimensions', () => {
		const terrain: Level = {
			width: 4,
			height: 4,
			currentPlayers: 0,
			tiles: Array.from({ length: 16 }, (_, i) =>
				makeTile(i % 4, Math.floor(i / 4), BiomeType.Desert),
			),
		};

		const texture = createTerrainTexture(terrain);

		expect(texture.image.width).toBe(4);
		expect(texture.image.height).toBe(4);
		expect((texture.image.data as Uint8Array).length).toBe(4 * 4 * 4);

		texture.dispose();
	});

	it('should write correct RGB values for biome tiles', () => {
		const terrain: Level = {
			width: 2,
			height: 1,
			currentPlayers: 0,
			tiles: [
				makeTile(0, 0, BiomeType.Desert),
				makeTile(1, 0, BiomeType.Swamp),
			],
		};

		const texture = createTerrainTexture(terrain);
		const data = texture.image.data as Uint8Array;

		const [dr, dg, db] = BIOME_COLORS_RGB[BiomeType.Desert];
		expect(data[0]).toBe(dr);
		expect(data[1]).toBe(dg);
		expect(data[2]).toBe(db);
		expect(data[3]).toBe(255);

		const [sr, sg, sb] = BIOME_COLORS_RGB[BiomeType.Swamp];
		expect(data[4]).toBe(sr);
		expect(data[5]).toBe(sg);
		expect(data[6]).toBe(sb);
		expect(data[7]).toBe(255);

		texture.dispose();
	});

	it('should use black for tiles with no biome', () => {
		const terrain: Level = {
			width: 1,
			height: 1,
			currentPlayers: 0,
			tiles: [makeTile(0, 0)],
		};

		const texture = createTerrainTexture(terrain);
		const data = texture.image.data as Uint8Array;

		expect(data[0]).toBe(0);
		expect(data[1]).toBe(0);
		expect(data[2]).toBe(0);
		expect(data[3]).toBe(255);

		texture.dispose();
	});

	it('should use NearestFilter for pixelated look', () => {
		const terrain: Level = {
			width: 1,
			height: 1,
			currentPlayers: 0,
			tiles: [makeTile(0, 0, BiomeType.Urban)],
		};

		const texture = createTerrainTexture(terrain);

		expect(texture.magFilter).toBe(NearestFilter);
		expect(texture.minFilter).toBe(NearestFilter);

		texture.dispose();
	});
});
