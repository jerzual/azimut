import { Routes } from '@angular/router';
import { HomeComponent } from './core/components/home/home.component';

export const routes: Routes = [
	{ path: '', component: HomeComponent, pathMatch: 'full' },
	{
		path: 'games',
		loadChildren: () =>
			import('./game/game.module').then((mod) => mod.GameModule),
	},
	{
		path: 'admin',
		loadChildren: () =>
			import('./admin/admin.module').then((mod) => mod.AdminModule),
	},
];
