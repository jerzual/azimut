import {
	Component,
	CUSTOM_ELEMENTS_SCHEMA,
	ChangeDetectionStrategy,
	computed,
	effect,
	inject,
} from '@angular/core';
import { extend, injectStore } from 'angular-three';
import { NgtCanvas } from 'angular-three/dom';
import { Mesh, PlaneGeometry, MeshBasicMaterial, DataTexture } from 'three';
import { GameStore } from '../../../game/services/game.store';
import { createTerrainTexture } from '../../utils/terrain-texture.util';

extend({
	Mesh,
	PlaneGeometry,
	MeshBasicMaterial,
});

@Component({
	selector: 'app-scene-graph',
	template: `
		@if (terrainTexture()) {
			<ngt-mesh [rotation]="[-1.5707963, 0, 0]">
				<ngt-plane-geometry [args]="planeArgs()" />
				<ngt-mesh-basic-material [map]="terrainTexture()" />
			</ngt-mesh>
		}
	`,
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SceneGraphComponent {
	private gameStore = inject(GameStore);
	private store = injectStore();

	private previousTexture: DataTexture | null = null;

	terrain = this.gameStore.terrain;

	terrainTexture = computed(() => {
		const terrain = this.terrain();
		if (!terrain) return null;
		return createTerrainTexture(terrain);
	});

	planeArgs = computed<[number, number]>(() => {
		const terrain = this.terrain();
		return terrain ? [terrain.width, terrain.height] : [1, 1];
	});

	constructor() {
		effect(() => {
			const texture = this.terrainTexture();

			if (this.previousTexture && this.previousTexture !== texture) {
				this.previousTexture.dispose();
			}
			this.previousTexture = texture;
		});

		effect(() => {
			const terrain = this.terrain();
			if (!terrain) return;

			const camera = this.store.camera();
			const cx = terrain.width / 2;
			const cz = terrain.height / 2;
			camera.position.set(cx, 400, cz + 450);
			camera.lookAt(cx, 0, cz);
		});
	}
}

@Component({
	selector: 'app-scene',
	styles: `
		:host {
			display: block;
			width: 100%;
			height: 100%;
			touch-action: none;
		}

		:host:focus {
			outline: none;
		}
	`,
	imports: [NgtCanvas, SceneGraphComponent],
	template: `
		<ngt-canvas
			[camera]="{ position: [256, 400, 450], fov: 50, near: 1, far: 2000 }"
		>
			<app-scene-graph *canvasContent />
		</ngt-canvas>
	`,
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SceneComponent {}
