import { Action } from '@ngrx/store';
import { ConfigurationSchema } from 'src/assets/config';

export enum ConfigActionTypes {
	LoadConfig = '[Config] Load Config',
	LoadConfigSuccess = '[Config] Load Config Success',
	LoadConfigfailure = '[Config] Load Config Failure',
}

export class LoadConfig implements Action {
	readonly type = ConfigActionTypes.LoadConfig;
}
export class LoadConfigSuccess implements Action {
	readonly type = ConfigActionTypes.LoadConfigSuccess;
	constructor(public payload: { data: ConfigurationSchema }) {}
}
export class LoadConfigFailure implements Action {
	readonly type = ConfigActionTypes.LoadConfigfailure;
	constructor(public payload: { error: Error }) {}
}

export type ConfigActions = LoadConfig | LoadConfigSuccess | LoadConfigFailure;
