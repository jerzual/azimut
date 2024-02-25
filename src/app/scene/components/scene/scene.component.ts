import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
	selector: 'app-scene',
	standalone: true,
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
	template: `<canvas id="renderZone" #renderZone></canvas>`,
})
export class SceneComponent {
	@ViewChild('renderZone', { static: true })
	public renderZone: ElementRef<HTMLCanvasElement>;

	constructor() {}
}
