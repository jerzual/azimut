import { City } from '../City';
import RandomBuilder from './RandomBuilder';
import RoadDigger from './RoadDigger';
import SquareBuilder from './SquareBuilder';

export default class CityBuilder extends RandomBuilder{
    city:City;
    constructor({seed}){
        super({seed});
        this.city = new City({width:512,height: 512});
    }
    digMainRoads(){

    }
    placeBiomes(){

    }
    build(){
        return this.city;
    }
}