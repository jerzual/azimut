import { reducer, initialState } from './config.reducer';
import { LoadConfig, LoadConfigSuccess, LoadConfigFailure } from '../actions/config.actions';
import { ConfigurationSchema } from 'src/assets/config';

describe('Config Reducer', () => {
  describe('when LoadConfig action is dispatched', () => {
    it('should set loading flag to true', () => {
      const action = new LoadConfig();
      const result = reducer(initialState, action);

      expect(result.loading).toBe(true);
    });
  });
  describe('when LoadConfigSuccess action is dispatched', () => {
    it('should fill values with config', () => {
      const payload: ConfigurationSchema = { backendUrl: 'testurl' };
      const action = new LoadConfigSuccess({ data: payload });

      const result = reducer(initialState, action);

      expect(result.values).toBeDefined();
      expect(result.values.backendUrl).toBe('testurl');
      expect(result.loading).toBe(false);
    });
  });
  describe('when LoadConfigFailure action is dispatched', () => {
    it('should set loading flag to true', () => {
      const error = new Error();
      const action = new LoadConfigFailure({ error });

      const result = reducer(initialState, action);

      expect(result.loading).toBe(false);
    });
  });
});
