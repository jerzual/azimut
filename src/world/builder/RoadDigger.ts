import RandomBuilder from "./RandomBuilder";
import City from "../City";

export default class RoadDigger extends RandomBuilder {
    city: City;
    constructor(city: City, seed: string){
        super({seed: seed});
        this.city = city;
    }
    digMainRoads(){

    }
    placeBiomes(){

    }
    build(){
        return this.city;
    }
}
