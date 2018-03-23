import { TestBed, inject } from '@angular/core/testing';

import { VictimService } from './victim.service';

describe('VictimService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VictimService]
    });
  });

  it('should be created', inject([VictimService], (service: VictimService) => {
    expect(service).toBeTruthy();
  }));
});
