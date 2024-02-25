import { TestBed } from '@angular/core/testing';
import { describe, beforeEach, it, expect } from 'vitest';

import { KeyboardService } from './keyboard.service';

describe('KeyboardService', () => {
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [KeyboardService],
		});
	});

	it('should be created', () => {
		const service: KeyboardService = TestBed.inject(KeyboardService);
		expect(service).toBeTruthy();
	});
});
