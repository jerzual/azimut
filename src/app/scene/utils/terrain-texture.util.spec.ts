import { describe, it, expect } from 'vitest';
import { createTerrainTexture } from './terrain-texture.util';
import { elevationToRgb } from '../../../engine/elevation-colors.const';
import type Level from '../../../engine/level.interface';
import type { Tile } from '../../../engine/tile.class';
import { TileType } from '../../../engine/tile.class';
import { NearestFilter } from 'three';

function makeTile(x: number, y: number, elevation = 0): Tile {
	return {
		x,
		y,
		type: TileType.FLOOR,
		walkable: true,
		diggable: false,
		elevation,
	};
}

describe('createTerrainTexture', () => {
	it('should create a DataTexture with correct dimensions', () => {
		const terrain: Level = {
			width: 4,
			height: 4,
			currentPlayers: 0,
			tiles: Array.from({ length: 16 }, (_, i) =>
				makeTile(i % 4, Math.floor(i / 4), 0.5),
			),
		};

		const texture = createTerrainTexture(terrain);

		expect(texture.image.width).toBe(4);
		expect(texture.image.height).toBe(4);
		expect((texture.image.data as Uint8Array).length).toBe(4 * 4 * 4);

		texture.dispose();
	});

	it('should write correct RGB values based on elevation', () => {
		const terrain: Level = {
			width: 2,
			height: 1,
			currentPlayers: 0,
			tiles: [makeTile(0, 0, 0.0), makeTile(1, 0, 0.9)],
		};

		const texture = createTerrainTexture(terrain);
		const data = texture.image.data as Uint8Array;

		const [lr, lg, lb] = elevationToRgb(0.0);
		expect(data[0]).toBe(lr);
		expect(data[1]).toBe(lg);
		expect(data[2]).toBe(lb);
		expect(data[3]).toBe(255);

		const [hr, hg, hb] = elevationToRgb(0.9);
		expect(data[4]).toBe(hr);
		expect(data[5]).toBe(hg);
		expect(data[6]).toBe(hb);
		expect(data[7]).toBe(255);

		texture.dispose();
	});

	it('should use elevation 0 color for tiles with no elevation', () => {
		const terrain: Level = {
			width: 1,
			height: 1,
			currentPlayers: 0,
			tiles: [makeTile(0, 0)],
		};

		const texture = createTerrainTexture(terrain);
		const data = texture.image.data as Uint8Array;

		const [r, g, b] = elevationToRgb(0);
		expect(data[0]).toBe(r);
		expect(data[1]).toBe(g);
		expect(data[2]).toBe(b);
		expect(data[3]).toBe(255);

		texture.dispose();
	});

	it('should use NearestFilter for pixelated look', () => {
		const terrain: Level = {
			width: 1,
			height: 1,
			currentPlayers: 0,
			tiles: [makeTile(0, 0, 0.5)],
		};

		const texture = createTerrainTexture(terrain);

		expect(texture.magFilter).toBe(NearestFilter);
		expect(texture.minFilter).toBe(NearestFilter);

		texture.dispose();
	});
});
