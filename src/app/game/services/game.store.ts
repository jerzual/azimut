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
	selectedId: string | undefined;
}

export const GameStore = signalStore(
	{ providedIn: 'root' },
	withDevtools('game'),
	withState<State>({ loaded: false, selectedId: undefined }),
	withEntities<Game>(),
	withComputed((state) => ({
		selected: computed(() => {
			const id = state.selectedId();
			if (!id) return;
			return state.entities().find((entity) => entity.id === id);
		}),
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
