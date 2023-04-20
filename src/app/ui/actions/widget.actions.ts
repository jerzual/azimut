import { Action } from '@ngrx/store';

export enum WidgetActionTypes {
	WidgetOpen = '[Widget] Open',
	WidgetClose = '[Widget] Close',
	WidgetMove = '[Widget] Move',
	WidgetResize = '[Widget] Resize',
}

export class WidgetOpen implements Action {
	readonly type = WidgetActionTypes.WidgetOpen;
}
export class WidgetClose implements Action {
	readonly type = WidgetActionTypes.WidgetClose;
}
export class WidgetMove implements Action {
	readonly type = WidgetActionTypes.WidgetMove;
}
export class WidgetResize implements Action {
	readonly type = WidgetActionTypes.WidgetResize;
	constructor(payload: { width: number; height: number }) {}
}

export type WidgetActions = WidgetResize;
