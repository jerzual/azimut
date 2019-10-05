import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';

import { concatMap } from 'rxjs/operators';
import { EMPTY } from 'rxjs';
import { UserInterfaceActionTypes, UserInterfaceActions } from '../actions/user-interface.actions';



@Injectable()
export class UserInterfaceEffects {


  @Effect()
  resize$ = this.actions$.pipe(
    ofType(UserInterfaceActionTypes.Resize),
    /** An EMPTY observable only emits completion. Replace with your own observable API request */
    concatMap(() => EMPTY)
  );


  constructor(private actions$: Actions<UserInterfaceActions>) {}

}
