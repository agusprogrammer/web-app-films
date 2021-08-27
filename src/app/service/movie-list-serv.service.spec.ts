import { TestBed } from '@angular/core/testing';

import { MovieListServService } from './movie-list-serv.service';

describe('MovieListServService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MovieListServService = TestBed.get(MovieListServService);
    expect(service).toBeTruthy();
  });
});
