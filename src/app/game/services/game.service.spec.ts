import { TestBed } from '@angular/core/testing';
import { beforeEach, describe, expect, it } from 'vitest';

import { GameService } from './game.service';
import { GameStore } from './game.store';

describe('GameService', () => {
	let service: GameService;
	let gameStore: InstanceType<typeof GameStore>;

	beforeEach(() => {
		TestBed.configureTestingModule({});
		service = TestBed.inject(GameService);
		gameStore = TestBed.inject(GameStore);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});

	it('should create a new game with city and terrain', () => {
		const { game, city } = service.newGame('test-seed-123');

		expect(game.id).toBeTruthy();
		expect(game.seed).toBeTruthy();
		expect(game.created).toBeInstanceOf(Date);
		expect(game.lastPlayed).toBeInstanceOf(Date);

		expect(city.levels.length).toBe(1);
		expect(city.levels[0].tiles.length).toBe(city.width * city.height);

		const firstTile = city.levels[0].tiles[0];
		expect(firstTile.elevation).toBeGreaterThanOrEqual(0);
		expect(firstTile.biome).toBeDefined();
	});

	it('should store city in GameStore on newGame', () => {
		expect(gameStore.currentCity()).toBeNull();

		const { city } = service.newGame('test-seed-456');

		expect(gameStore.currentCity()).toBe(city);
		expect(gameStore.terrain()).toBe(city.levels[0]);
	});

	it('should clear city from GameStore on quitGame', () => {
		service.newGame('test-seed-789');
		expect(gameStore.currentCity()).not.toBeNull();

		service.quitGame();
		expect(gameStore.currentCity()).toBeNull();
	});
});
