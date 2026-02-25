import Tile from './tile.class';

// a grid is used to aggregade array<Array>accesses and made subgrids of the main city grid.
interface Grid {
	getTileAt(x: number, y: number): Tile;
}

export default Grid;
