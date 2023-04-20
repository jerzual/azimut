import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import {
	ConfigActionTypes,
	ConfigActions,
	LoadConfigSuccess,
	LoadConfigFailure,
} from '../actions/config.actions';
import { ConfigService } from '../services/config.service';

@Injectable()
export class ConfigEffects {
	loadConfig$ = createEffect(() =>
		this.actions$.pipe(
			ofType(ConfigActionTypes.LoadConfig),
			switchMap(() =>
				// call the service
				this.configService.fetchConfig().pipe(
					// return a Success action when everything went OK
					map((config) => new LoadConfigSuccess({ data: config })),
					// return a Failed action when something went wrong
					catchError((error) => of(new LoadConfigFailure({ error }))),
				),
			),
		),
	);

	constructor(
		private actions$: Actions<ConfigActions>,
		private configService: ConfigService,
	) {}
}
