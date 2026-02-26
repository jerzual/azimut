import { PlaneGeometry } from 'three';
import Level from '../../../engine/level.interface';

const ELEVATION_SCALE = 30;

/**
 * Creates a PlaneGeometry with vertex heights from tile elevation.
 * The plane has (width × height) vertices matching the tile grid.
 * Vertex Z is set from elevation (plane is later rotated so Z becomes up).
 */
export function createTerrainGeometry(terrain: Level): PlaneGeometry {
	const { width, height, tiles } = terrain;
	const geometry = new PlaneGeometry(width, height, width - 1, height - 1);
	const positions = geometry.attributes['position'];

	for (const tile of tiles) {
		// PlaneGeometry generates vertices row-major (top-to-bottom, left-to-right)
		// matching LevelBuilder iteration order: for y { for x }
		const idx = tile.y * width + tile.x;
		positions.setZ(idx, (tile.elevation ?? 0) * ELEVATION_SCALE);
	}

	positions.needsUpdate = true;
	geometry.computeVertexNormals();

	return geometry;
}
