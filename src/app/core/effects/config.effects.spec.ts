import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable, of } from 'rxjs';

import { ConfigEffects } from './config.effects';
import { ConfigService } from '../services/config.service';
import { ConfigActionTypes, ConfigActions, LoadConfig } from '../actions/config.actions';

describe('ConfigEffects', () => {
  let actions$: Observable<any>;
  let effects: ConfigEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ConfigEffects,
        provideMockActions(() => actions$),
        { provide: ConfigService, useValue: {
          fetchConfig: jest.fn(),
        }}
      ]
    });

    effects = TestBed.get<ConfigEffects>(ConfigEffects);
  });

  it('should react to LoadConfig action', () => {
    actions$ = of(new LoadConfig());
    expect(effects).toBeTruthy();
  });
});
