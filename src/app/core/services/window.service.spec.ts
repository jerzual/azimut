import { TestBed } from '@angular/core/testing';
import { describe, beforeEach, it, expect } from 'vitest';

import { WindowService } from './window.service';

describe('WindowService', () => {
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [WindowService],
		});
	});

	it('should be created', () => {
		const service: WindowService = TestBed.inject(WindowService);
		expect(service).toBeTruthy();
	});
});
