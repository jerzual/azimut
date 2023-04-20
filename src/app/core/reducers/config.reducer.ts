import { ConfigActions, ConfigActionTypes } from '../actions/config.actions';
import { ConfigurationSchema } from 'src/assets/config';

export const configFeatureKey = 'config';

export interface State {
	loading: boolean;
	values?: ConfigurationSchema;
}

export const initialState: State = {
	loading: false,
};

export function reducer(state = initialState, action: ConfigActions): State {
	switch (action.type) {
		case ConfigActionTypes.LoadConfig:
			return { ...state, loading: true };
		case ConfigActionTypes.LoadConfigSuccess:
			return { ...state, values: { ...action.payload.data }, loading: false };
		case ConfigActionTypes.LoadConfigfailure:
			return { ...state, loading: false };

		default:
			return state;
	}
}
