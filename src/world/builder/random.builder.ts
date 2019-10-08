import * as Chance from 'chance';

export default class RandomBuilder {
  rng: Chance.SeededChance;
  constructor({ seed }) {
    this.rng = new Chance(seed);
  }

  random() {
    return this.rng.natural();
  }
}
