import { City } from '../city.class';
import RandomBuilder from './random.builder';

export default class CityBuilder extends RandomBuilder {
	city: City;
	constructor({ seed }: { seed: string }) {
		super({ seed });
		this.city = new City({ width: 512, height: 512 });
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
