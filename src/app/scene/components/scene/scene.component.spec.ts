import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SceneComponent } from './scene.component';
import { EngineService } from '../../services/engine.service';

describe('SceneComponent', () => {
  let component: SceneComponent;
  let fixture: ComponentFixture<SceneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SceneComponent ],
      providers: [EngineService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SceneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
