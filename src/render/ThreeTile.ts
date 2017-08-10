import Tile, {TileImpl, TileType} from "../engine/Tile";

class ThreeTile extends TileImpl {
    x: number;
    y: number;
    type: TileType;
    constructor(x, y, type) {
        super();
        this.x = x;
        this.y = y;
    }
}

export default ThreeTile;
