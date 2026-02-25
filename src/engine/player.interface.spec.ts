import { Player, playerFactory } from './player.interface';
import { describe, expect, it } from 'vitest';

describe('Player interface', () => {
	it('creates a player', () => {
		const player: Player = playerFactory();

		expect(player.uuid).toBeDefined();
		expect(player.createdAt).toBeDefined();
	});
});
