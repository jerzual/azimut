import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { describe, beforeEach, it, expect, vi } from 'vitest';

import { GameComponent } from './game.component';
import { GameService } from '../../services/game.service';

describe('GameComponent', () => {
	let component: GameComponent;
	let fixture: ComponentFixture<GameComponent>;
	const testSeed = 'test-seed-abc';

	const mockGameService = {
		newGame: vi.fn().mockReturnValue({
			game: {
				id: testSeed,
				seed: testSeed,
				created: new Date(),
				lastPlayed: new Date(),
			},
			city: {
				width: 4,
				height: 4,
				levels: [
					{
						tiles: Array.from({ length: 16 }, (_, i) => ({
							x: i % 4,
							y: Math.floor(i / 4),
							biome: 0,
						})),
						width: 4,
						height: 4,
						currentPlayers: 0,
					},
				],
			},
		}),
	};

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [GameComponent],
			providers: [
				{
					provide: ActivatedRoute,
					useValue: {
						snapshot: {
							paramMap: {
								get: (key: string) =>
									key === 'id' ? testSeed : null,
							},
						},
					},
				},
				{ provide: GameService, useValue: mockGameService },
			],
		});

		fixture = TestBed.createComponent(GameComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('should call newGame with the route seed', () => {
		expect(mockGameService.newGame).toHaveBeenCalledWith(testSeed);
	});

	it('should store the game and city', () => {
		expect(component.game()?.seed).toBe(testSeed);
		expect(component.city()?.levels.length).toBe(1);
	});
});
