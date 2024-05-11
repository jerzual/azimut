import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoadingComponent } from './core/components/loading/loading.component';

import { SceneComponent } from './scene/components/scene/scene.component';
import { UserInterfaceStore } from './ui';

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [LoadingComponent, RouterOutlet, SceneComponent],
	providers: [UserInterfaceStore],
	template: `
		@if (loading) {
			<app-loading></app-loading>
		}
		<main class="azimut-main">
			<app-scene></app-scene>
		</main>
		<aside class="azimut-ui">
			<router-outlet></router-outlet>
		</aside>
	`,
	styles: `
		.azimut-main {
			position: absolute;
			top: 0;
			right: 0;
			bottom: 0;
			left: 0;
			z-index: 0;
		}

		.azimut-ui {
			position: absolute;
			left: 0;
			right: 0;
			top: 0;
			bottom: 0;
			z-index: 10;
			pointer-events: none;
		}
		.azimut-ui ::ng-deep .widget {
			pointer-events: all;
		}
	`,
})
export class AppComponent implements OnInit {
	public loading = true;
	title = 'azimut-angular';

	ngOnInit() {
		this.loading = false;
	}
}
