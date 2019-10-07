import { Action } from '@ngrx/store';

export enum UserInterfaceActionTypes {
  Keyboard = '[UserInterface] Keyboard input',
  Resize = '[UserInterface] Resize',
  Mouse = '[UserInterface] mouse input',
  Loading = '[UserInterface] set loading true',
}

export class Resize implements Action {
  readonly type = UserInterfaceActionTypes.Resize;
}


export type UserInterfaceActions = Resize;
