import { TestBed } from '@angular/core/testing';

import { BelarusService } from './belarus.service';

describe('BelarusService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BelarusService = TestBed.get(BelarusService);
    expect(service).toBeTruthy();
  });
});
