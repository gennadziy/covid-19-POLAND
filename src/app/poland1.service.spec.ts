import { TestBed } from '@angular/core/testing';
import { Poland1Service } from './poland1.service';

describe('Poland1Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Poland1Service = TestBed.get(Poland1Service);
    expect(service).toBeTruthy();
  });
});
