import { TestBed, inject } from '@angular/core/testing';

import { VictimService } from './victim.service';
import { HttpClientModule } from '@angular/common/http';

describe('VictimService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [VictimService]
    });
  });

  it('should be created', inject([VictimService], (service: VictimService) => {
    expect(service).toBeTruthy();
  }));
});
