import { Action } from '@ngrx/store';

export enum CoreActionTypes {
	InitializerStart = '[Core] App Initializer start',
	InitializerEnd = '[Core] App Initializer end',
	NewGlobalError = '[Core] ERROR',
}

export class InitializerStart implements Action {
	readonly type = CoreActionTypes.InitializerStart;
}
export class InitializerEnd implements Action {
	readonly type = CoreActionTypes.InitializerEnd;
}

export class NewGlobalError implements Action {
	readonly type = CoreActionTypes.NewGlobalError;
	constructor(readonly payload: { error: Error }) {}
}

export type CoreActions = InitializerStart | InitializerEnd | NewGlobalError;
