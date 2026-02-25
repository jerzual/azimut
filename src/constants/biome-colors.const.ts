import { BiomeType } from '../engine/biome.enum';

export const BIOME_COLORS: Record<BiomeType, string> = {
	[BiomeType.Swamp]: '#4a6741',
	[BiomeType.Desert]: '#c2b280',
	[BiomeType.Country]: '#7ab793',
	[BiomeType.Residential]: '#a0855b',
	[BiomeType.Urban]: '#808080',
	[BiomeType.Downtown]: '#505050',
	[BiomeType.Airport]: '#d0d0d0',
};

function hexToRgb(hex: string): [number, number, number] {
	const n = parseInt(hex.slice(1), 16);
	return [(n >> 16) & 0xff, (n >> 8) & 0xff, n & 0xff];
}

export const BIOME_COLORS_RGB: Record<BiomeType, [number, number, number]> =
	Object.fromEntries(
		Object.entries(BIOME_COLORS).map(([k, v]) => [Number(k), hexToRgb(v)]),
	) as Record<BiomeType, [number, number, number]>;

export const DEFAULT_TILE_COLOR_RGB: [number, number, number] = [0, 0, 0];
