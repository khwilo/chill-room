import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieSearchService {
  private currentMoviesSource = new BehaviorSubject<any[]>([]);
  currentMovies$ = this.currentMoviesSource.asObservable();

  private filteredMoviesSource = new BehaviorSubject<any[]>([]);
  filteredMovies$ = this.filteredMoviesSource.asObservable();

  constructor() {}

  updateCurrentMovieList(value) {
    this.currentMoviesSource.next(value);
  }

  updateFilteredMovieList(value) {
    this.filteredMoviesSource.next(value);
  }
}
