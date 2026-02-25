import Actor from '../../engine/actor.class';
import RandomBuilder from './random.builder';

export default class HeroBuilder extends RandomBuilder {
	hero!: Actor;
	constructor({ seed }: { seed: string }) {
		super({ seed });
	}
	hair() {
		// TODO: implement
	}
	facialHair() {
		// TODO: implement
	}
	skinColor() {
		// TODO: implement
	}
	pantsShape() {
		// TODO: implement
	}
	pantsColor() {
		// TODO: implement
	}
	build(): Actor {
		return this.hero;
	}
}
