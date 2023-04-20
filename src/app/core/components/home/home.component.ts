import { Component, OnInit } from '@angular/core';
import { nanoid } from 'nanoid';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
	public newGameKey!: string;

	constructor() {}

	ngOnInit() {
		this.newGameKey = this.getGameKey();
	}

	getGameKey() {
		return nanoid();
	}
}
