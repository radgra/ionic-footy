import { TestBed } from '@angular/core/testing';

import { WcTabsService } from './wc-tabs.service';

describe('WcTabsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WcTabsService = TestBed.get(WcTabsService);
    expect(service).toBeTruthy();
  });
});
