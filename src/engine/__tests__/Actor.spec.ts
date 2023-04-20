import { Actor, ActorStatus, actorFactory } from '../Actor';

describe('Actor interface', () => {
	it('provides a factory function', () => {
		const object = actorFactory();

		expect(object.uuid).toBeDefined();
		expect(object.status).toBe(ActorStatus.IDLING);
	});
});
