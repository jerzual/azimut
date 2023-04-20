import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable, of } from 'rxjs';

import { GameEffects } from './game.effects';

describe('GameEffects', () => {
	let actions$: Observable<any>;
	let effects: GameEffects;

	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [GameEffects, provideMockActions(() => actions$)],
		});

		effects = TestBed.get<GameEffects>(GameEffects);
	});

	it('should be created', () => {
		actions$ = of(undefined);
		expect(effects).toBeTruthy();
	});
});
