import { City } from './city.class';

describe('City interface', () => {
	it('', () => {
		const city = new City({ width: 42, height: 42 });
		expect(city).toBeDefined();
	});
});
