import { TestBed } from '@angular/core/testing';

import { KeyboardService } from './keyboard.service';

describe('KeyboardService', () => {
	beforeEach(() => TestBed.configureTestingModule({}));

	it('should be created', () => {
		const service: KeyboardService = TestBed.inject(KeyboardService);
		expect(service).toBeTruthy();
	});
});
