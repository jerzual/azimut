import { inject, Injectable } from '@angular/core';
import CityBuilder from '../../../world/builder/city.builder';
import { City } from '../../../world/city.class';
import { Game } from '../models/game.model';
import { GameStore } from './game.store';

@Injectable({
	providedIn: 'root',
})
export class GameService {
	private gameStore = inject(GameStore);

	newGame(seed: string): { game: Game; city: City } {
		const now = new Date();

		const game: Game = {
			id: seed,
			seed,
			created: now,
			lastPlayed: now,
		};

		const city = new CityBuilder({ seed })
			.generateTerrain()
			.placeBiomes()
			.build();

		this.gameStore.addGame(game);

		return { game, city };
	}

	quitGame() {
		// TODO: implement
	}
}
