import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';

import { concatMap } from 'rxjs/operators';
import { EMPTY } from 'rxjs';
import { ConfigActionTypes, ConfigActions } from '../actions/config.actions';



@Injectable()
export class ConfigEffects {


  @Effect()
  loadConfig$ = this.actions$.pipe(
    ofType(ConfigActionTypes.LoadConfig),
    /** An EMPTY observable only emits completion. Replace with your own observable API request */
    concatMap(() => EMPTY)
  );


  constructor(private actions$: Actions<ConfigActions>) {}

}
