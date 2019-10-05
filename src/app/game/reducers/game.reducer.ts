
import { GameActions, GameActionTypes } from '../actions/game.actions';

export const gameFeatureKey = 'game';

export interface State {
  items: any[];
}

export const initialState: State = {
  items: [],
};

export function reducer(state = initialState, action: GameActions): State {
  switch (action.type) {

    case GameActionTypes.LoadGame:
      return state;

    default:
      return state;
  }
}
