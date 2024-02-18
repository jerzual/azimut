import { withDevtools } from "@angular-architects/ngrx-toolkit";
import { signalStore, withState } from "@ngrx/signals";
import { withEntities } from "@ngrx/signals/entities";
import { Game } from "../models/game.model";

export interface State {
	loaded: boolean;
}

export const GameStore = signalStore(
	{	providedIn: 'root'	},
	withDevtools('game'),
	withState<State>({ loaded: false }),
	withEntities<Game>(),
);
