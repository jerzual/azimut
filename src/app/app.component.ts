import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoadingComponent } from './core/components/loading/loading.component';
import { NgIf } from '@angular/common';
import { SceneComponent } from './scene/components/scene/scene.component';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
	standalone: true,
	imports: [NgIf, LoadingComponent, RouterOutlet, SceneComponent],
})
export class AppComponent implements OnInit {
	public loading = true;
	title = 'azimut-angular';

	ngOnInit() {
		this.loading = false;
	}
}
