import { TestBed } from '@angular/core/testing';

import { MovieServService } from './movie-serv.service';

describe('MovieServService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MovieServService = TestBed.get(MovieServService);
    expect(service).toBeTruthy();
  });
});
