import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';

import { concatMap } from 'rxjs/operators';
import { EMPTY } from 'rxjs';
import { AdminActionTypes, AdminActions } from '../actions/admin.actions';
import { AdminService } from '../services/admin.service';

@Injectable()
export class AdminEffects {
  @Effect()
  loadAdmins$ = this.actions$.pipe(
    ofType(AdminActionTypes.LoadSettings),
    /** An EMPTY observable only emits completion. Replace with your own observable API request */
    concatMap(() => EMPTY),
  );

  @Effect()
  loadWorlds$ = this.actions$.pipe(
    ofType(AdminActionTypes.LoadWorlds),
    /** An EMPTY observable only emits completion. Replace with your own observable API request */
    concatMap(() => EMPTY),
  );

  @Effect()
  loadUsers$ = this.actions$.pipe(
    ofType(AdminActionTypes.LoadUsers),
    /** An EMPTY observable only emits completion. Replace with your own observable API request */
    concatMap(() => EMPTY),
  );

  constructor(
    private actions$: Actions<AdminActions>,
    private adminService: AdminService,
  ) {}
}
