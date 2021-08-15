import { TestBed } from '@angular/core/testing';

import { GetallgameService } from './getallgame.service';

describe('GetallgameService', () => {
  let service: GetallgameService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetallgameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
