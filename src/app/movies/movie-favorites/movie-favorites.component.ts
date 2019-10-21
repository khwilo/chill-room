import { Component, OnInit } from '@angular/core';

import { Movie } from '../movie';

@Component({
  selector: 'app-movie-favorites',
  templateUrl: './movie-favorites.component.html',
  styleUrls: ['./movie-favorites.component.css']
})
export class MovieFavoritesComponent implements OnInit {
  favoriteMovies: Movie[];
  message = "YOU HAVEN'T ADDED ANY MOVIE TO THE FAVORITES LIST";

  constructor() {}

  ngOnInit() {
    this.favoriteMovies = JSON.parse(sessionStorage.getItem('movie-favorites'));
    console.log(this.favoriteMovies);
  }
}
