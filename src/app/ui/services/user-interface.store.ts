import { signalStore, withState } from '@ngrx/signals';
import { withDevtools } from '@angular-architects/ngrx-toolkit';
import { withEntities } from '@ngrx/signals/entities';
import { Widget } from '../models/widget.model';

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

export const UserInterfaceStore = signalStore(
	{ providedIn: 'root' },
	withDevtools('ui'),
	withState<State>(initialState),
	withEntities<Widget>(),
);
