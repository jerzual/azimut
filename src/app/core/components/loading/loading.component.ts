import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-loading',
	standalone: true,
	template: `
		<div class="loader">
			<div class="circle"></div>
			<div class="circle"></div>
			<div class="circle"></div>
			<div class="circle"></div>
		</div>
	`,
	styles: [
		`
			.loader {
				position: absolute;
				width: 5em;
				height: 5em;
				left: calc(50vw - 2.5em);
				top: calc(50vh - 2.5em);
				display: flex;
			}
			.circle {
				position: absolute;
				border-radius: 50%;
				width: 5em;
				height: 5em;
				border-color: black;
				border-style: solid;

				transform-origin: 2.5em 2.5em;

				animation: rotate-circle 1s linear infinite;
			}
			.circle:nth-child(1) {
				border-color: #d57825;
				border-width: 0px 0px 0px 3px;
				transform: rotate(0deg);
				animation-duration: 1.5s;
				width: 6em;
				height: 6em;
				left: -0.5em;
				top: -0.5em;
				transform-origin: 3em 3em;
			}
			.circle:nth-child(2) {
				border-color: #338a93;
				border-width: 0 0 4px 0;
				animation-duration: 1.2s;
			}
			.circle:nth-child(3) {
				border-color: #cad325;
				border-width: 0 5px 0 0;
				animation-duration: 0.9s;
				width: 4em;
				height: 4em;
				left: 0.5em;
				top: 0.5em;
				transform-origin: 2em 2em;
			}
			.circle:nth-child(4) {
				border-color: #6e1e8d;
				border-width: 5px 0 0 0;
				animation-duration: 0.6s;
				width: 3em;
				height: 3em;
				left: 1em;
				top: 1em;
				transform-origin: 1.5em 1.5em;
			}

			@keyframes rotate-circle {
				0% {
					transform: rotate(360deg);
				}
				100% {
					transform: rotate(0deg);
				}
			}
		`,
	],
})
export class LoadingComponent {}
