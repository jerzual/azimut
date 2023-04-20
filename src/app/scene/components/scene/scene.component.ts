import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
	selector: 'app-scene',
	templateUrl: './scene.component.html',
	styleUrls: ['./scene.component.css'],
	standalone: true,
})
export class SceneComponent implements OnInit {
	@ViewChild('renderZone', { static: true })
	public renderZone: ElementRef<HTMLCanvasElement>;

	constructor() {}

	ngOnInit() {
		console.log('Scene');
	}
}
