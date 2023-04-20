import { Component, OnInit, Input } from '@angular/core';
import { Widget } from '../../models/widget.model';

@Component({
	selector: 'app-widget',
	templateUrl: './widget.component.html',
	styleUrls: ['./widget.component.css'],
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
