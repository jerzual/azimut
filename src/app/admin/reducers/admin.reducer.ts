import {
  AdminActions,
  AdminActionTypes,
  LoadSettings,
} from '../actions/admin.actions';

export const adminFeatureKey = 'admin';

export interface State {
  loading: boolean;
  users?: [];
  worlds?: [];
  settings?: [];
}

export const initialState: State = {
  loading: false,
};

export function reducer(state = initialState, action: AdminActions): State {
  switch (action.type) {
    case AdminActionTypes.LoadSettings:
      return loadSettingsReducer(state);

    case AdminActionTypes.LoadWorlds:
      return loadWorldsReducer(state);

    case AdminActionTypes.LoadUsers:
      return loadUsersReducer(state);

    default:
      return state;
  }
}

function loadSettingsReducer(state) {
  return state;
}
function loadWorldsReducer(state) {
  return state;
}
function loadUsersReducer(state) {
  return state;
}
