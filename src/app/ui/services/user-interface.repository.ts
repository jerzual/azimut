import { Injectable } from '@angular/core';
import {  createStore, withProps } from '@ngneat/elf';

export interface State {
	overlay: boolean;
	dialog: boolean;
	width: number;
	height: number;
}

export const initialState: State = {
	overlay: false,
	dialog: false,
	width: 640,
	height: 480,
};
const uiStore = createStore(
	{ name: 'user-interface' },
	withProps<State>(initialState),
);

@Injectable({
	providedIn: 'root',
})
export class UserInterfaceRepositoryService {
	constructor() {}
}
