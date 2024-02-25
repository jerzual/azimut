import { TestBed } from '@angular/core/testing';
import { beforeEach, describe, expect, it } from 'vitest';

import { GameService } from './game.service';

describe('GameService', () => {
	beforeEach(() => {
		TestBed.configureTestingModule({});
	});

	it('should be created', () => {
		const service: GameService = TestBed.inject(GameService);
		expect(service).toBeTruthy();
	});
});
