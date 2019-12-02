import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { MovieSearchService } from '../shared/movie-search.service';
import { MovieListFilterService } from '../movies/services/movie-list-filter.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  @Input() logo: string;
  movieSearch = 'search movie title';
  movies: any;

  private _movieTitle: string;

  get movieTitle(): string {
    return this._movieTitle;
  }

  set movieTitle(value: string) {
    this._movieTitle = value;
    this.movieSearchService.updateFilteredMovieList(
      this.filterMovieList(this.movieTitle, this.movies)
    );
  }

  constructor(
    private movieListFilterService: MovieListFilterService,
    private movieSearchService: MovieSearchService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.movieSearchService.currentMovies$.subscribe(
      data => (this.movies = data)
    );
  }

  filterMovieList(searchTerm, movieList) {
    return searchTerm
      ? this.movieListFilterService.searchByTitle(searchTerm, movieList)
      : movieList;
  }
}
