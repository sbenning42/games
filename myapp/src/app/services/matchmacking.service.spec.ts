import { TestBed, inject } from '@angular/core/testing';

import { MatchmackingService } from './matchmacking.service';

describe('MatchmackingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MatchmackingService]
    });
  });

  it('should be created', inject([MatchmackingService], (service: MatchmackingService) => {
    expect(service).toBeTruthy();
  }));
});
