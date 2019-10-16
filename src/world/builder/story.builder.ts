/**
 * Takes a seed as an argument, and generate npc, quests, bosses and items / rewards
 */
import { City } from '../city.class';
import RandomBuilder from './random.builder';

export default class StoryBuilder extends RandomBuilder {
    city: City;
    constructor({seed}) {
        super({seed});
        this.city = new City({width: 512, height: 512});
    }
}
