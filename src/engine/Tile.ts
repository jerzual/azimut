 interface Tile{
    x:number;
    y:number;
    type:TileType;
    walkable:boolean;
    diggable:boolean;
    transportTo:Tile;
}
export enum TileType{
    EMPTY,
    FLOOR,
    WALL,
    DOOR,
    DEATH,
    TELEPORTER
}
export class TileImpl implements Tile{
    x:number;
    y:number;
    type:TileType;
    walkable:boolean;
    diggable:boolean;
    transportTo:Tile;
    get key(){
        return `${this.x},${this.y}`;
    }
    set key(key:string){
        console.log();
    }
}
 export default Tile;