import { describe, expect, it } from 'vitest';

import { Player, playerFactory } from './player.interface';

describe('Player interface', () => {
	it('creates a player', () => {
		const player: Player = playerFactory();

		expect(player.uuid).toBeDefined();
		expect(player.createdAt).toBeDefined();
	});
});
