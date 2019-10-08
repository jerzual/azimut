
import { AdminActions, AdminActionTypes } from '../actions/admin.actions';

export const adminFeatureKey = 'admin';

export interface State {

}

export const initialState: State = {

};

export function reducer(state = initialState, action: AdminActions): State {
  switch (action.type) {

    case AdminActionTypes.LoadAdmins:
      return state;

    default:
      return state;
  }
}
