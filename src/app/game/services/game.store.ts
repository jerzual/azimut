import { withDevtools } from '@angular-architects/ngrx-toolkit';
import {
	patchState,
	signalStore,
	withComputed,
	withMethods,
	withState,
} from '@ngrx/signals';
import { withEntities } from '@ngrx/signals/entities';
import { Game } from '../models/game.model';
import { computed } from '@angular/core';

export interface State {
	loaded: boolean;
	selectedId?: string;
}

export const GameStore = signalStore(
	{ providedIn: 'root' },
	withDevtools('game'),
	withState<State>({ loaded: false }),
	withEntities<Game>(),
	withComputed((state) => ({
		selected: computed(() => state.entities()[state.selectedId()]),
		games: computed(() =>
			state
				.entities()
				.sort(
					(a, b) => a.created.getMilliseconds() - b.created.getMilliseconds(),
				),
		),
	})),
	withMethods((store) => ({
		select: (id: string) => {
			patchState(store, (state) => ({ ...state, selectedId: id }));
		},
	})),
);
