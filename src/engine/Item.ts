
// import {Sprite} from 'three';
export interface Item {
    uuid:string;
    //display name
    name:string;
    //object key
    key:string;
    //number of turns before it breaks
    duration:number;
    //sprite
    spriteName:string;
}
export class ItemImpl{
    
    uuid:string;
    //display name
    name:string;
    //object key
    key:string;
    //number of turns before it breaks
    duration:number;
    //sprite
    spriteName:string;
}
export default Item;