import { Component, OnInit } from '@angular/core';
import { nanoid } from 'nanoid';
import { RouterLinkActive, RouterLink } from '@angular/router';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css'],
	standalone: true,
	imports: [RouterLinkActive, RouterLink],
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
