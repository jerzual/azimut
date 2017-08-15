import { Action } from 'redux';

export const SELECT_HERO = 'SELECT_HERO';
export const SHOW_INVENTORY = 'SHOW_INVENTORY';

export default class PartyActions{
    
    static selectHero(payload:any){
        return {
            type: SELECT_HERO,
            payload
        }
    }
    static useFirstItem(){
        return {

        }
    }
    static useSecondItem(){
        return {

        }
    }
}