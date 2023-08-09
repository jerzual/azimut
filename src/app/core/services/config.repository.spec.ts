import { TestBed } from '@angular/core/testing';

import { ConfigRepositoryService } from './config.repository';

describe('ConfigRepositoryService', () => {
  let service: ConfigRepositoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConfigRepositoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
