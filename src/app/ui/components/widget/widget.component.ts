import { Component, OnInit, Input } from '@angular/core';
import { Widget } from '../../models/widget.model';
import { AngularDraggableModule } from 'angular2-draggable';
import { CommonModule } from '@angular/common';

@Component({
	selector: 'app-widget',
	template: `<div
		class="widget window"
		[ngClass]="{
			'window-closed': state.closed
		}"
		ngDraggable
		[handle]="windowHandle"
	>
		<div class="window-head" #windowHandle>
			<h3 class="window-title">{{ title }}</h3>
			<button class="window-close">Close</button>
		</div>
		<div class="window-body">
			<ng-content></ng-content>
		</div>
	</div> `,
	styles: ``,
	standalone: true,
	imports: [AngularDraggableModule, CommonModule],
})
export class WidgetComponent implements OnInit {
	title: string;
	@Input()
	state: Partial<Widget>;
	constructor() {}

	ngOnInit() {
		this.state = { closed: true };
	}
}
