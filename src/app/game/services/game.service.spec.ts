import { TestBed } from '@angular/core/testing';
import { beforeEach, describe, expect, it } from 'vitest';

import { GameService } from './game.service';

describe('GameService', () => {
	let service: GameService;

	beforeEach(() => {
		TestBed.configureTestingModule({});
		service = TestBed.inject(GameService);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});

	it('should create a new game with city and terrain', () => {
		const { game, city } = service.newGame();

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
});
