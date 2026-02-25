import {
	Component,
	CUSTOM_ELEMENTS_SCHEMA,
	ChangeDetectionStrategy,
} from '@angular/core';
import { extend } from 'angular-three';
import { NgtCanvas } from 'angular-three/dom';
import { Mesh, BoxGeometry, MeshBasicMaterial } from 'three';

extend({
	Mesh,
	BoxGeometry,
	MeshBasicMaterial,
});

@Component({
	selector: 'app-scene-graph',
	template: `
		<ngt-mesh>
			<ngt-box-geometry />
			<ngt-mesh-basic-material color="mediumpurple" />
		</ngt-mesh>
	`,
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SceneGraphComponent {}

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
		<ngt-canvas>
			<app-scene-graph *canvasContent />
		</ngt-canvas>
	`,
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SceneComponent {}
