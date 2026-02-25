import { ActorStatus, actorFactory } from './actor.class';
import { describe, it, expect } from 'vitest';
describe('Actor interface', () => {
	it('provides a factory function', () => {
		const object = actorFactory();

		expect(object.uuid).toBeDefined();
		expect(object.status).toBe(ActorStatus.IDLING);
	});
});
