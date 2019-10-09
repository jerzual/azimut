import { TestBed } from '@angular/core/testing';

import { EngineService } from './engine.service';
import * as canvas from 'canvas';

describe('EngineService', () => {
  const canvasElement = new canvas.Canvas(640, 480);
  beforeEach(() =>
    TestBed.configureTestingModule({ providers: [EngineService] }),
  );

  it('should be created', () => {
    const service: EngineService = TestBed.get(EngineService);
    expect(service).toBeTruthy();
  });
});
