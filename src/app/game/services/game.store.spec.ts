import { TestBed } from '@angular/core/testing';

import {describe, beforeEach, it, expect } from 'vitest';
import { GameStore } from './game.store';

describe('GameStore', () => {
  let service: typeof GameStore;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GameStore);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
