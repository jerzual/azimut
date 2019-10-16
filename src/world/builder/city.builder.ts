import { City } from '../city.class';
import RandomBuilder from './random.builder';
import RoadDigger from './road-digger.builder';
import SquareBuilder from './square.builder';

export default class CityBuilder extends RandomBuilder {
    city: City;
    constructor({seed}) {
        super({seed});
        this.city = new City({width: 512, height: 512});
    }
    digMainRoads() {

    }
    placeBiomes() {

    }
    build() {
        return this.city;
    }
}
