import { Action } from '@ngrx/store';

export enum CoreActionTypes {
  IntializerStart = '[Core] App Initializer start',
  IntializerEnd = '[Core] App Initializer end',
  NewGlobalError = '[Core] ERROR',
}

export class IntializerStart implements Action {
  readonly type = CoreActionTypes.IntializerStart;
}
export class IntializerEnd implements Action {
  readonly type = CoreActionTypes.IntializerEnd;
}

export class NewGlobalError implements Action {
  readonly type = CoreActionTypes.NewGlobalError;
  constructor(readonly payload: {error: Error}) {}
}

export type CoreActions = IntializerStart | IntializerEnd;
