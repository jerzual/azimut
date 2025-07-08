import {
	Component,
	CUSTOM_ELEMENTS_SCHEMA,
	ChangeDetectionStrategy,
} from '@angular/core';
import { extend, NgtCanvas } from 'angular-three';
import { Mesh, BoxGeometry } from 'three';

extend({
	Mesh, // makes ngt-mesh available
	BoxGeometry, // makes ngt-box-geometry available
});

@Component({
	// This Component is rendered in the Custom Renderer
	standalone: true,
	template: `
		<ngt-mesh>
			<ngt-box-geometry />
		</ngt-mesh>
	`,
	schemas: [CUSTOM_ELEMENTS_SCHEMA], // required
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SceneGraphComponent {}

@Component({
	selector: 'app-scene',
	styles: [
		`
			#renderZone {
				width: 100%;
				height: 100%;
				touch-action: none;
			}

			#renderZone:focus {
				outline: none;
			}
		`,
	],
	imports: [NgtCanvas],
	template: `<ngt-canvas [sceneGraph]="SceneGraph"></ngt-canvas>`,
})
export class SceneComponent {
	SceneGraph = SceneGraphComponent;
}
