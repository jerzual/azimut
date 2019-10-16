import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TransferHttpCacheModule } from '@nguniversal/common';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { reducers, metaReducers, REDUCERS_TOKEN } from './reducers';
import { AppEffects } from './app.effects';
import { environment } from '../environments/environment';
import { CoreModule } from './core/core.module';
import { SceneModule } from './scene/scene.module';
import { HttpClientModule } from '@angular/common/http';
import { WindowService } from './core/services/window.service';

// For AoT compilation:
export function getWindow() {
  return window;
}
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'azimut' }),
    TransferHttpCacheModule,
    AppRoutingModule,
    HttpClientModule,
    CoreModule,
    SceneModule,
    // ngrx
    StoreModule.forRoot(REDUCERS_TOKEN, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
      },
    }),
    EffectsModule.forRoot([AppEffects]),
    StoreRouterConnectingModule.forRoot(),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
  ],
  providers: [
    { provide: REDUCERS_TOKEN, useValue: reducers },
    {
      provide: WindowService,
      useFactory: getWindow,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
