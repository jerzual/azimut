import { Action } from 'redux';
export const TURN_STARTED = '';
export const TURN_ENDED = '';
export const TURN_ACTION_CREATED = '';
export const TURN_ACTION_CANCELLED = '';
export const TURN_VALIDATED = '';

export default class TileActions{
    static hover() {
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