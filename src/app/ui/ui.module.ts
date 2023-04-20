import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AngularDraggableModule } from 'angular2-draggable';

import * as fromUserInterface from './reducers/user-interface.reducer';

import { UserInterfaceEffects } from './effects/user-interface.effects';
import { WidgetComponent } from './components/widget/widget.component';
import { WidgetsContainerComponent } from './containers/widgets-container/widgets-container.component';

@NgModule({
	declarations: [WidgetComponent, WidgetsContainerComponent],
	imports: [
		CommonModule,
		AngularDraggableModule,
		StoreModule.forFeature(
			fromUserInterface.userInterfaceFeatureKey,
			fromUserInterface.reducer,
		),
		EffectsModule.forFeature([UserInterfaceEffects]),
	],
})
export class UiModule {}
