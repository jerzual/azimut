import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SceneComponent } from './components/scene/scene.component';
import { EngineService } from './services/engine.service';

@NgModule({
  declarations: [SceneComponent],
  imports: [CommonModule],
  providers: [EngineService],
  exports: [SceneComponent],
})
export class SceneModule {}
