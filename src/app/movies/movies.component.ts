import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { Movie } from './movie';
import { MovieDataService } from './services/movie-data.service';
import { MovieSearchService } from '../shared/movie-search.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  movies: Movie[];

  constructor(
    private movieDataService: MovieDataService,
    private movieSearchService: MovieSearchService
  ) {}

  filteredMovies$ = this.movieSearchService.filteredMovies$;

  ngOnInit() {
    this.movieDataService.getMovies().subscribe((data: any[]) => {
      this.movies = data['results']; // use bracket notation because of type checking
      this.movieSearchService.updateCurrentMovieList(this.movies);
      this.movieSearchService.updateFilteredMovieList(this.movies);
    });
  }
}
