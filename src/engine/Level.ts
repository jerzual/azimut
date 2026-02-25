/*
 * a Level is a set of tiles, it is linked to a socket.io room.
 */
import Tile from './Tile';

export interface Level {
	// array of positions
	tiles: Tile[];
	currentPlayers: number;
	width: number;
	height: number;
}
// Each type of level means a different map GeneratorFunction.
export enum LevelType {
	CAVERN, // ROT.Map.
	BUILDING_FLOOR,
	OPEN_FIELD,
	URBAN_AREA,
}

export default Level;
