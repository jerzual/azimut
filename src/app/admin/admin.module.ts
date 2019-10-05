import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { StoreModule } from '@ngrx/store';
import * as fromAdmin from './reducers/admin.reducer';
import { EffectsModule } from '@ngrx/effects';
import { AdminEffects } from './effects/admin.effects';
import { AdminRootComponent } from './components/admin-root/admin-root.component';


@NgModule({
  declarations: [AdminRootComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    StoreModule.forFeature(fromAdmin.adminFeatureKey, fromAdmin.reducer),
    EffectsModule.forFeature([AdminEffects])
  ]
})
export class AdminModule { }
