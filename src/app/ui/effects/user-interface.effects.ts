import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { concatMap } from 'rxjs/operators';
import { EMPTY } from 'rxjs';
import {
  UserInterfaceActionTypes,
  UserInterfaceActions,
} from '../actions/user-interface.actions';

@Injectable()
export class UserInterfaceEffects {
  resize$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(UserInterfaceActionTypes.Resize),
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        concatMap(() => EMPTY),
      ),
    { dispatch: false },
  );

  constructor(private actions$: Actions<UserInterfaceActions>) {}
}
