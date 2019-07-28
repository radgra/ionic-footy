import { TestBed } from '@angular/core/testing';

import { WorldCupService } from './world-cup.service';

describe('WorldCupService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WorldCupService = TestBed.get(WorldCupService);
    expect(service).toBeTruthy();
  });
});
