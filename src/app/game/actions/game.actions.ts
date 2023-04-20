import { Action } from '@ngrx/store';

export enum GameActionTypes {
	LoadGame = '[Game] Load Game',
	NewGame = '[Game] New Game',
	QuiGame = '[Game] Quit Game',
}

export class LoadGame implements Action {
	readonly type = GameActionTypes.LoadGame;
}

export class NewGame implements Action {
	readonly type = GameActionTypes.NewGame;
}

export type GameActions = LoadGame | NewGame;
