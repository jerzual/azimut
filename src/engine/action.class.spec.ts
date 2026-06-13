import { describe, test, expect } from 'vitest';

import { ActionTypes, actionFactory } from './action.class';

describe('Action interface', () => {
	test('provides a factory function', () => {
		const object = actionFactory(ActionTypes.TALK);

		expect(object.uuid).toBeDefined();
		expect(object.type).toBe(ActionTypes.TALK);
	});
});
