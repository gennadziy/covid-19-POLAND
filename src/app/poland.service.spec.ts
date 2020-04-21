import { TestBed } from '@angular/core/testing';

import { PolandService } from './poland.service';

describe('PolandService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PolandService = TestBed.get(PolandService);
    expect(service).toBeTruthy();
  });
});
