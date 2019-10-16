import City from '../city.class';
import RandomBuilder from './random.builder';
import RoadDigger from './road-digger.builder';

export default class SquareBuilder extends RandomBuilder {
    city: City;
    constructor({seed}) {
        super({seed});
    }
    placeSquare() {

    }
    placeBiomes() {

    }
    build() {
        return this.city;
    }
}
