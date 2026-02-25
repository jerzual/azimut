import City from '../city.class';
import RandomBuilder from './random.builder';

export default class SquareBuilder extends RandomBuilder {
	city!: City;
	constructor({ seed }: { seed: string }) {
		super({ seed });
	}
	placeSquare() {
		// TODO: implement
	}
	placeBiomes() {
		// TODO: implement
	}
	build() {
		return this.city;
	}
}
