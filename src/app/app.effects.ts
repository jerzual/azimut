import { Injectable } from '@angular/core';
import {
  Actions,
  createEffect,
  OnRunEffects,
  EffectNotification,
  ofType,
} from '@ngrx/effects';
import { Observable } from 'rxjs';
import { exhaustMap, takeUntil } from 'rxjs/operators';
import { CoreActionTypes } from './core/actions/core.actions';

/**
 * Main application side effects.
 */
@Injectable()
export class AppEffects implements OnRunEffects {
  constructor(private actions$: Actions) {}

  /**
   * Wait for ngrx initialization to dispatch our own APP_INITIALIZER
   */
  ngrxOnRunEffects(
    resolvedEffects$: Observable<EffectNotification>,
  ): Observable<EffectNotification> {
    return this.actions$.pipe(
      ofType(CoreActionTypes.InitializerStart),
      exhaustMap(() =>
        resolvedEffects$.pipe(
          takeUntil(this.actions$.pipe(ofType(CoreActionTypes.InitializerEnd))),
        ),
      ),
    );
  }
}
