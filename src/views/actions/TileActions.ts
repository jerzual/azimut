import { Action } from 'redux';

export default class TileActions{
    static hover(){
        return {
            
        }
    }
    static pathTo(){
        
    }
    static moveTo(){
        
    }
    static dropItemHere():Action{
        return {
            type: 'DROP_ITEM'
        }
    }
    static getItem(index:number){

    }
    static itemFetched(item:any){

    }
}