/**
 * Takes a seed as an argument, and generate npc, quests, bosses and items / rewards
 */
import { City } from '../City';
import RandomBuilder from './RandomBuilder';

export default class StoryBuilder extends RandomBuilder{
    city:City;
    constructor({seed}){
        super({seed});
        this.city = new City({width:512,height: 512});
    }
}