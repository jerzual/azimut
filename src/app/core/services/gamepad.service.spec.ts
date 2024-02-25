import { TestBed } from '@angular/core/testing';
import { describe, beforeEach, it, expect } from 'vitest';

import { GamepadService } from './gamepad.service';

describe('GamepadService', () => {
	beforeEach(() => {
		TestBed.configureTestingModule({});
	});

	it('should be created', () => {
		const service: GamepadService = TestBed.inject(GamepadService);
		expect(service).toBeTruthy();
	});
});
