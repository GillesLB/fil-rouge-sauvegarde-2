import { TestBed, inject } from '@angular/core/testing';

import { WitnessService } from './witness.service';
import { HttpClientModule } from '@angular/common/http';

describe('WitnessService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [WitnessService]
    });
  });

  it('should be created', inject([WitnessService], (service: WitnessService) => {
    expect(service).toBeTruthy();
  }));
});
