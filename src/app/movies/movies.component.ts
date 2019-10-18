import { Component, OnInit } from '@angular/core';

import { Movie } from './movie';
import { MovieDataService } from './services/movie-data.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  movies: Movie[];
  constructor(private movieDataService: MovieDataService) {}

  ngOnInit() {
    this.movieDataService.getMovies().subscribe((data: any[]) => {
      console.log(data['results']);
      this.movies = data['results']; // use bracket notation because of type checking
    });
  }
}
