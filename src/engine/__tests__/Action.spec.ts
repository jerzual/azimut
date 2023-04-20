import { Action, ActionTypes, actionFactory } from '../Action';

describe('Action interface', () => {
	test('provides a factory function', () => {
		const object = actionFactory(ActionTypes.TALK);

		expect(object.uuid).toBeDefined();
		expect(object.type).toBe(ActionTypes.TALK);
	});
});
