import { ActorStatus, actorFactory } from './Actor';
import { describe, it, expect } from 'vitest';
describe('Actor interface', () => {
	it('provides a factory function', () => {
		const object = actorFactory();

		expect(object.uuid).toBeDefined();
		expect(object.status).toBe(ActorStatus.IDLING);
	});
});
