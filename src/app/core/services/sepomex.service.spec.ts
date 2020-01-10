import { TestBed } from '@angular/core/testing';

import { SepomexService } from './sepomex.service';

describe('SepomexService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SepomexService = TestBed.get(SepomexService);
    expect(service).toBeTruthy();
  });
});
