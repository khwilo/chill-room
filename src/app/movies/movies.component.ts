import { Component, OnInit } from '@angular/core';

import { Movie } from './movie';
import { MovieDataService } from './services/movie-data.service';
import { MovieListFilterService } from './services/movie-list-filter.service';
import { MovieSearchService } from '../shared/movie-search.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  movies: Movie[];
  _movieListFilter: string;
  filteredMovies: Movie[];

  constructor(
    private movieDataService: MovieDataService,
    private movieListFilterService: MovieListFilterService,
    private movieSearchService: MovieSearchService
  ) {}

  get movieListFilter(): string {
    return this._movieListFilter;
  }

  set movieListFilter(searchTerm: string) {
    this._movieListFilter = searchTerm;
    this.filteredMovies = this.movieListFilter
      ? this.movieListFilterService.searchByTitle(
          this.movieListFilter,
          this.movies
        )
      : this.movies;
  }

  ngOnInit() {
    this.movieDataService.getMovies().subscribe((data: any[]) => {
      this.movies = data['results']; // use bracket notation because of type checking
      this.filteredMovies = this.movies;
    });
    this.movieSearchService.currentSearchTerm.subscribe(
      value => (this.movieListFilter = value)
    );
  }
}
