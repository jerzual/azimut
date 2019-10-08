import { Action } from '@ngrx/store';

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
}
export class LoadConfigFailure implements Action {
  readonly type = ConfigActionTypes.LoadConfigfailure;
}


export type ConfigActions = LoadConfig | LoadConfigSuccess | LoadConfigFailure;
