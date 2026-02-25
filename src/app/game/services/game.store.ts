import { withDevtools } from '@angular-architects/ngrx-toolkit';
import {
	patchState,
	signalStore,
	withComputed,
	withMethods,
	withState,
} from '@ngrx/signals';
import { addEntity, withEntities } from '@ngrx/signals/entities';
import { Game } from '../models/game.model';
import { computed } from '@angular/core';
import { City } from '../../../world/city.class';

export interface State {
	loaded: boolean;
	selectedId: string | undefined;
	currentCity: City | null;
}

export const GameStore = signalStore(
	{ providedIn: 'root' },
	withDevtools('game'),
	withState<State>({ loaded: false, selectedId: undefined, currentCity: null }),
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
		terrain: computed(() => state.currentCity()?.levels[0] ?? null),
	})),
	withMethods((store) => ({
		select: (id: string) => {
			patchState(store, (state) => ({ ...state, selectedId: id }));
		},
		addGame: (game: Game) => {
			patchState(store, addEntity(game));
		},
		setCurrentCity: (city: City) => {
			patchState(store, { currentCity: city });
		},
		clearCurrentCity: () => {
			patchState(store, { currentCity: null });
		},
	})),
);
