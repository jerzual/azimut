import { Action } from '@ngrx/store';

export enum AdminActionTypes {
  LoadSettings = '[Admin] Load Settings',
  LoadWorlds = '[Admin] Load Worlds',
  LoadUsers = '[Admin] Load Users',
}

export class LoadSettings implements Action {
  readonly type = AdminActionTypes.LoadSettings;
}
export class LoadWorlds implements Action {
  readonly type = AdminActionTypes.LoadWorlds;
}
export class LoadUsers implements Action {
  readonly type = AdminActionTypes.LoadUsers;
}


export type AdminActions = LoadWorlds | LoadSettings | LoadUsers;
