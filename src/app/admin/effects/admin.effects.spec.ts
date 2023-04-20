import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable, of } from 'rxjs';

import { AdminEffects } from './admin.effects';
import { AdminService } from '../services/admin.service';

describe('AdminEffects', () => {
	let actions$: Observable<any>;
	let effects: AdminEffects;
	let adminServiceMock: AdminService;
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				AdminEffects,
				provideMockActions(actions$),
				{
					provide: AdminService,
					useValue: {
						getUsers: jest.fn(),
					},
				},
			],
		});

		effects = TestBed.get<AdminEffects>(AdminEffects);
		adminServiceMock = TestBed.get<AdminService>(AdminService);
	});

	it('should be created', () => {
		actions$ = of({});
		expect(effects).toBeTruthy();
	});
});
