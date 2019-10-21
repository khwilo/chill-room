import { TestBed } from '@angular/core/testing';

import { MovieStorageService } from './movie-storage.service';

describe('MovieStorageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MovieStorageService = TestBed.get(MovieStorageService);
    expect(service).toBeTruthy();
  });
});
