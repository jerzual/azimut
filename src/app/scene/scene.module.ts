import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SceneComponent } from './components/scene/scene.component';

@NgModule({
	declarations: [SceneComponent],
	imports: [CommonModule],
	providers: [],
	exports: [SceneComponent],
})
export class SceneModule {}
