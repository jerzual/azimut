import { Component, OnInit } from '@angular/core';
import { nanoid } from 'nanoid';
import { RouterLinkActive, RouterLink } from '@angular/router';

@Component({
	selector: 'app-home',
	template: `<h1 class="home-title">AZIMUT</h1>

		<ul class="menu widget">
			<li class="menu-item">
				<a
					class="menu-item-link"
					[routerLink]="['/games', newGameKey]"
					routerLinkActive="router-link-active"
					>New Game</a
				>
			</li>
			<li class="menu-item">
				<a
					class="menu-item-link"
					[routerLink]="['/games']"
					routerLinkActive="router-link-active"
					>Load Game</a
				>
			</li>
			<li class="menu-item">
				<a class="menu-item-link" [routerLink]="['/admin']">Admin</a>
			</li>
		</ul> `,
	styles: [
		`
			:root {
				--main-color: #7ab793;
			}
			.home-title {
				color: #7ab793;
				text-transform: uppercase;
				font-weight: bold;
			}
			.home-menu {
				color: var(--main-color);
			}

			.menu-item {
				list-style-type: none;
			}

			.menu-item-link {
				color: var(--main-color);
				transition: 0.3s ease-in-out color;
			}

			.menu-item-link:hover,
			.menu-item-link:focus {
				color: white;
			}
		`,
	],
	imports: [RouterLinkActive, RouterLink],
})
export class HomeComponent implements OnInit {
	public newGameKey!: string;

	ngOnInit() {
		this.newGameKey = this.getGameKey();
	}

	getGameKey() {
		return nanoid();
	}
}
