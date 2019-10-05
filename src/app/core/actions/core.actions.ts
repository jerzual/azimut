import { Action } from '@ngrx/store';

export enum CoreActionTypes {
  IntializerStart = '[Core] App Initializer start',
  IntializerEnd = '[Core] App Initializer end',
}

export class IntializerStart implements Action {
  readonly type = CoreActionTypes.IntializerStart;
}
export class IntializerEnd implements Action {
  readonly type = CoreActionTypes.IntializerEnd;
}

export type CoreActions = IntializerStart | IntializerEnd;
