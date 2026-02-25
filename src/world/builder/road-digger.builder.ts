import RandomBuilder from './random.builder';
import City from '../city.class';

export default class RoadDigger extends RandomBuilder {
	city: City;
	constructor(city: City, seed: string) {
		super({ seed });
		this.city = city;
	}
	digMainRoads() {
		// TODO: implement
	}
	placeBiomes() {
		// TODO: implement
	}
	build() {
		return this.city;
	}
}
