import { combineReducers } from 'redux';

import actionReducer from './ActionReducer';
import actorReducer from './ActorReducer';
import cityReducer from './CityReducer';
import messageReducer from './MessageReducer';
import contentReducer from './ContentReducer';
import optionsReducer from './OptionsReducer';
import partyReducer from './PartyReducer';
import sceneReducer from './SceneReducer';
import turnReducer from './TurnReducer';

export default combineReducers({
  actions: actionReducer,
  scene: sceneReducer,
  city: cityReducer,
  party: partyReducer,
  options: optionsReducer,
  hero: actorReducer,
  content: contentReducer,
  message: messageReducer,
  turn: turnReducer,
});
