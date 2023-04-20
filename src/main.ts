import { enableProdMode, importProvidersFrom } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { getWindow } from './app/app.module';
import { environment } from './environments/environment';
import { AppComponent } from './app/app.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import {
	StoreRouterConnectingModule,
	FullRouterStateSerializer,
} from '@ngrx/router-store';
import { AppEffects } from './app/app.effects';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CoreModule } from './app/core/core.module';
import {
	withInterceptorsFromDi,
	provideHttpClient,
} from '@angular/common/http';
import { AppRoutingModule } from './app/app-routing.module';
import { TransferHttpCacheModule } from '@nguniversal/common';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { WindowService } from './app/core/services/window.service';
import { REDUCERS_TOKEN, reducers, metaReducers } from './app/reducers';

if (environment.production) {
	enableProdMode();
}

bootstrapApplication(AppComponent, {
	providers: [
		importProvidersFrom(
			BrowserModule.withServerTransition({ appId: 'azimut' }),
			TransferHttpCacheModule,
			AppRoutingModule,
			CoreModule,
			// ngrx
			StoreModule.forRoot(REDUCERS_TOKEN, {
				metaReducers,
				runtimeChecks: {
					strictStateImmutability: true,
					strictActionImmutability: true,
				},
			}),
			EffectsModule.forRoot([AppEffects]),
			StoreRouterConnectingModule.forRoot({
				serializer: FullRouterStateSerializer,
			}),
			StoreDevtoolsModule.instrument({
				maxAge: 25,
				logOnly: environment.production,
			}),
		),
		// FIXME: this do not work anymore on ssr with angular 14 upgrade.
		// {
		//   provide: APP_INITIALIZER,
		//   useFactory: initApplication,
		//   deps: [Store],
		//   multi: true,
		// },
		{ provide: REDUCERS_TOKEN, useValue: reducers },
		{
			provide: WindowService,
			useFactory: getWindow,
		},
		provideHttpClient(withInterceptorsFromDi()),
	],
}).catch((err) => console.error(err));
