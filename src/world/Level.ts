import Tile from '../engine/Tile';
// Each type of level means a different map GeneratorFunction.
enum LevelType {
    CAVERN, //ROT.Map.
    BUILDING_FLOOR,
    OPEN_FIELD,
    URBAN_AREA,
}

export interface Level {
    uuid: String;
    name: String;
    tiles: Array<Tile>;

}