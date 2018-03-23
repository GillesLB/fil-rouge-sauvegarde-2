import { TestBed, inject } from '@angular/core/testing';

import { PoeService } from './poe.service';

describe('PoeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PoeService]
    });
  });

  it('should be created', inject([PoeService], (service: PoeService) => {
    expect(service).toBeTruthy();
  }));
});
