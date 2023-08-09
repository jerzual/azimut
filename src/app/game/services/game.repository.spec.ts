import { TestBed } from '@angular/core/testing';

import { GameRepositoryService } from './game.repository';

describe('GameRepositoryService', () => {
  let service: GameRepositoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GameRepositoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
