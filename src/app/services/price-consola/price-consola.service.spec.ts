import { TestBed } from '@angular/core/testing';

import { PriceConsolaService } from './price-consola.service';

describe('PriceConsolaService', () => {
  let service: PriceConsolaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PriceConsolaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
