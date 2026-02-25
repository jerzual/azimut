import { TestBed } from '@angular/core/testing';
import { describe, beforeEach, it, expect } from 'vitest';

import { GameStore } from './game.store';
import { City } from '../../../world/city.class';

describe('GameStore', () => {
	let service: InstanceType<typeof GameStore>;

	beforeEach(() => {
		TestBed.configureTestingModule({});
		service = TestBed.inject(GameStore);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});

	it('should have currentCity default to null', () => {
		expect(service.currentCity()).toBeNull();
	});

	it('should set and clear currentCity', () => {
		const city = new City({ width: 64, height: 64 });
		city.levels = [
			{ tiles: [], width: 64, height: 64, currentPlayers: 0 },
		];

		service.setCurrentCity(city);
		expect(service.currentCity()).toBe(city);

		service.clearCurrentCity();
		expect(service.currentCity()).toBeNull();
	});

	it('should compute terrain from currentCity', () => {
		expect(service.terrain()).toBeNull();

		const level = { tiles: [], width: 64, height: 64, currentPlayers: 0 };
		const city = new City({ width: 64, height: 64 });
		city.levels = [level];

		service.setCurrentCity(city);
		expect(service.terrain()).toBe(level);
	});
});
