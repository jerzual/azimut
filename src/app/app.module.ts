import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { reducers, metaReducers/*, REDUCERS_TOKEN*/ } from './reducers';
import { AppEffects } from './app.effects';
import { environment } from '../environments/environment';
import { CoreModule } from './core/core.module';
import { SceneModule } from './scene/scene.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    SceneModule,
    // ngrx
    StoreModule.forRoot(/*REDUCERS_TOKEN*/ reducers, {
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
  providers: [/*{ provide: REDUCERS_TOKEN, useValue: reducers }*/],
  bootstrap: [AppComponent],
})
export class AppModule {}
