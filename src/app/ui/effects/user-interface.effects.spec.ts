import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { UserInterfaceEffects } from './user-interface.effects';

describe('UserInterfaceEffects', () => {
  let actions$: Observable<any>;
  let effects: UserInterfaceEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        UserInterfaceEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get<UserInterfaceEffects>(UserInterfaceEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
