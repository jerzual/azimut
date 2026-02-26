import {
	afterNextRender,
	Component,
	inject,
	signal,
	viewChild,
	ElementRef,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { elevationToRgb } from '../../../../engine/elevation-colors.const';
import { Game } from '../../models/game.model';
import { GameService } from '../../services/game.service';
import { GameStore } from '../../services/game.store';

@Component({
	selector: 'app-game',
	standalone: true,
	template: `
		<div class="game-info">
			<h2>Game</h2>
			@if (game()) {
				<p class="seed">Seed: {{ game()!.seed }}</p>
			}
		</div>
		<canvas #minimap class="minimap"></canvas>
	`,
	styles: [
		`
			:host {
				display: flex;
				flex-direction: column;
				gap: 8px;
			}
			.game-info {
				color: #7ab793;
			}
			.seed {
				font-size: 0.8em;
				opacity: 0.7;
			}
			.minimap {
				width: 100%;
				max-width: 512px;
				aspect-ratio: 1;
				image-rendering: pixelated;
			}
		`,
	],
})
export class GameComponent {
	private route = inject(ActivatedRoute);
	private gameService = inject(GameService);
	private gameStore = inject(GameStore);

	game = signal<Game | null>(null);
	minimap = viewChild<ElementRef<HTMLCanvasElement>>('minimap');

	constructor() {
		const seed = this.route.snapshot.paramMap.get('id')!;
		const { game } = this.gameService.newGame(seed);
		this.game.set(game);

		afterNextRender(() => this.drawMinimap());
	}

	private drawMinimap() {
		const city = this.gameStore.currentCity();
		const canvas = this.minimap()?.nativeElement;
		if (!city || !canvas) return;

		const { width, height } = city;
		canvas.width = width;
		canvas.height = height;

		const ctx = canvas.getContext('2d');
		if (!ctx) return;
		const terrain = city.levels[0];

		for (const tile of terrain.tiles) {
			const [r, g, b] = elevationToRgb(tile.elevation ?? 0);
			ctx.fillStyle = `rgb(${r},${g},${b})`;
			ctx.fillRect(tile.x, tile.y, 1, 1);
		}
	}
}
