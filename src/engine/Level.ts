/*
 * a Level is a set of tiles, it is linked to a socket.io room.
 */
import Tile from "./Tile";

export interface Level {
    //array of positions
    tiles:Tile[];
    currentPlayers:number;
    width:number;
    height:number;
}

export default Level;