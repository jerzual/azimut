import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { concatMap } from 'rxjs/operators';
import { EMPTY } from 'rxjs';
import { GameActionTypes, GameActions } from '../actions/game.actions';

@Injectable()
export class GameEffects {
  loadGame$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(GameActionTypes.LoadGame),
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        concatMap(() => EMPTY),
      ),
    { dispatch: false },
  );

  newGame$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(GameActionTypes.NewGame),
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        concatMap(() => EMPTY),
      ),
    { dispatch: false },
  );

  constructor(private actions$: Actions<GameActions>) {}
}
