import { TestBed, inject } from '@angular/core/testing';

import { SuspectService } from './suspect.service';
import { HttpClientModule } from '@angular/common/http';

describe('SuspectService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [SuspectService]
    });
  });

  it('should be created', inject([SuspectService], (service: SuspectService) => {
    expect(service).toBeTruthy();
  }));
});
