import { Action } from '@ngrx/store';

export enum AdminActionTypes {
  LoadAdmins = '[Admin] Load Admins',
  LoadWorlds = '[Admin] Load Worlds',
  LoadUsers = '[Admin] Load Users',

}

export class LoadAdmins implements Action {
  readonly type = AdminActionTypes.LoadAdmins;
}


export type AdminActions = LoadAdmins;
