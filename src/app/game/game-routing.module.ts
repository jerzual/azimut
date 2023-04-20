import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GameComponent } from './components/game/game.component';
import { GamesListComponent } from './containers/games-list/games-list.component';

const routes: Routes = [
	{
		path: '',
		component: GamesListComponent,
	},
	{ path: ':id', component: GameComponent },
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class GameRoutingModule {}
