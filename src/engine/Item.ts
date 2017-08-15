import {Sprite} from 'babylonjs';

export interface Item {
    uuid:string;
    //display name
    name:string;
    //number of turns before it breaks
    duration:number;
    //sprite
    spriteName:string;
}
export enum ItemType {
    CONSUMABLE,
    QUESTABLE,
    WEAPON,
}
export class ItemImpl{
    
    uuid:string;
    //display name
    name:string;
    //number of turns before it breaks
    duration:number;
    //sprite
    spriteName:string;
}
export default Item;