import { TestBed } from '@angular/core/testing';

import { MovieListFilterService } from './movie-list-filter.service';

describe('MovieListFilterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MovieListFilterService = TestBed.get(MovieListFilterService);
    expect(service).toBeTruthy();
  });
});
