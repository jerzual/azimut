import { TestBed } from '@angular/core/testing';

import { UserInterfaceRepositoryService } from './user-interface.repository';

describe('UserInterfaceRepositoryService', () => {
  let service: UserInterfaceRepositoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserInterfaceRepositoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
