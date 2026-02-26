import {
	DataTexture,
	NearestFilter,
	RGBAFormat,
	UnsignedByteType,
} from 'three';
import Level from '../../../engine/level.interface';
import { elevationToRgb } from '../../../engine/elevation-colors.const';

export function createTerrainTexture(terrain: Level): DataTexture {
	const { width, height, tiles } = terrain;
	const data = new Uint8Array(width * height * 4);

	for (const tile of tiles) {
		const i = (tile.y * width + tile.x) * 4;
		const [r, g, b] = elevationToRgb(tile.elevation ?? 0);
		data[i] = r;
		data[i + 1] = g;
		data[i + 2] = b;
		data[i + 3] = 255;
	}

	const texture = new DataTexture(
		data,
		width,
		height,
		RGBAFormat,
		UnsignedByteType,
	);
	texture.magFilter = NearestFilter;
	texture.minFilter = NearestFilter;
	texture.needsUpdate = true;

	return texture;
}
