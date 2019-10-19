import { Component, OnInit, Input } from '@angular/core';

import { MovieSearchService } from '../shared/movie-search.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  @Input() logo: string;
  movieSearch = 'search movie title';
  movieTitle: string;

  constructor(private movieSearchService: MovieSearchService) {}

  ngOnInit() {
    this.movieSearchService.currentSearchTerm.subscribe(
      value => (this.movieTitle = value)
    );
  }

  updateSearchValue() {
    this.movieSearchService.updateSearchTerm(this.movieTitle);
  }
}
