import Tile, {TileImpl, TileType} from '../../engine/Tile';

/**
 * Tiles is the base item on the map, you vlick tiles to select objects.
 */
class ViewTile extends TileImpl {
    x: number;
    y: number;
    type: TileType;
    constructor(x, y, type) {
        super();
        this.x = x;
        this.y = y;
    }
}

export default ViewTile;
