import { Routes } from '@angular/router';
import { HomeComponent } from './core/components/home/home.component';

export const routes: Routes = [
	{ path: '', component: HomeComponent, pathMatch: 'full' },
	{
		path: 'games',
		loadChildren: () => import('./game/').then((mod) => mod.routes),
	},
	{
		path: 'admin',
		loadChildren: () => import('./admin/').then((mod) => mod.routes),
	},
];
