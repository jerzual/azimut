import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { GameRoutingModule } from './game-routing.module';
import * as fromGame from './reducers/game.reducer';
import { GameEffects } from './effects/game.effects';
import { GameComponent } from './components/game/game.component';
import { GamesListComponent } from './containers/games-list/games-list.component';

@NgModule({
  imports: [
    CommonModule,
    GameRoutingModule,
    StoreModule.forFeature(fromGame.gameFeatureKey, fromGame.reducer),
    EffectsModule.forFeature([GameEffects]),
  ],
  declarations: [GameComponent, GamesListComponent],
  entryComponents: [GameComponent],
})
export class GameModule {}
