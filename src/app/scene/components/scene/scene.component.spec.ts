import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SceneComponent } from './scene.component';
import { EngineService } from '../../services/engine.service';

describe('SceneComponent', () => {
  let component: SceneComponent;
  let fixture: ComponentFixture<SceneComponent>;
  let engineServiceMock: EngineService;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SceneComponent],
      providers: [
        {
          provide: EngineService,
          useValue: {
            createScene: jest.fn(),
            animate: jest.fn(),
          },
        },
      ],
    }).compileComponents();
    engineServiceMock = TestBed.get(EngineService);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SceneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(engineServiceMock.createScene).toHaveBeenCalled();
  });
});
