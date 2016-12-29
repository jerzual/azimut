import City from '../City';
import RandomBuilder from './RandomBuilder';
import RoadDigger from './RoadDigger';

export default class SquareBuilder extends RandomBuilder{
    city:City;
    constructor({seed}){
        super({seed});
    }
    placeSquare(){
        
    }
    placeBiomes(){

    }
    build(){
        return this.city;
    }
}