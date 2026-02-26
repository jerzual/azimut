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
import {
	Mesh,
	PlaneGeometry,
	MeshStandardMaterial,
	AmbientLight,
	DirectionalLight,
	DataTexture,
} from 'three';
import { GameStore } from '../../../game/services/game.store';
import { createTerrainTexture } from '../../utils/terrain-texture.util';
import { createTerrainGeometry } from '../../utils/terrain-geometry.util';

extend({
	Mesh,
	PlaneGeometry,
	MeshStandardMaterial,
	AmbientLight,
	DirectionalLight,
});

@Component({
	selector: 'app-scene-graph',
	template: `
		<ngt-ambient-light [intensity]="0.6" />
		<ngt-directional-light [position]="[200, 300, 100]" [intensity]="0.8" />
		@if (terrainTexture()) {
			<ngt-mesh [geometry]="terrainGeometry()" [rotation]="[-1.5707963, 0, 0]">
				<ngt-mesh-standard-material [map]="terrainTexture()" />
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

	terrainGeometry = computed(() => {
		const terrain = this.terrain();
		if (!terrain) return null;
		return createTerrainGeometry(terrain);
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
			camera.position.set(cx + 300, 300, cz + 300);
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
