import { Component, OnInit, Input } from '@angular/core';
import { Widget } from '../../models/widget.model';
import { AngularDraggableModule } from 'angular2-draggable';
import { CommonModule } from '@angular/common';

@Component({
	selector: 'app-widget',
	templateUrl: './widget.component.html',
	styleUrls: ['./widget.component.css'],
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
