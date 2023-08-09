import { Routes } from '@angular/router';
import { GameComponent } from './components/game/game.component';
import { GamesListComponent } from './containers/games-list/games-list.component';

export const routes: Routes = [
	{
		path: '',
		component: GamesListComponent,
	},
	{ path: ':id', component: GameComponent },
];
