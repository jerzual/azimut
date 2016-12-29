import Tile from "../engine/Tile";

const MIN_CITY_SIZE = 64;

export class City {
    tiles: Array<Array<Tile>>;
    width: number;
    height: number;
    constructor({width, height}) {
        this.tiles = [
            []
        ];
        this.width = width || MIN_CITY_SIZE;
        this.height = height || MIN_CITY_SIZE;
    }
}

export default City;