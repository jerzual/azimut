import { describe, it, expect } from 'vitest';

import { ActorStatus, actorFactory } from './actor.class';
describe('Actor interface', () => {
	it('provides a factory function', () => {
		const object = actorFactory();

		expect(object.uuid).toBeDefined();
		expect(object.status).toBe(ActorStatus.IDLING);
	});
});
