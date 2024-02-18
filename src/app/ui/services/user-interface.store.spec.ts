import { TestBed } from '@angular/core/testing';

import { describe, it, expect, beforeEach } from 'vitest';
import { UserInterfaceStore } from './user-interface.store';

describe('UserInterfaceRepositoryService', () => {
	let service: any;

	beforeEach(() => {
		TestBed.configureTestingModule({});
		service = TestBed.inject(UserInterfaceStore);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});
});
