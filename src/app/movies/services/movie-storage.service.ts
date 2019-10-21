import { Inject, Injectable } from '@angular/core';
import { SESSION_STORAGE, WebStorageService } from 'ngx-webstorage-service';

import { Movie } from '../movie';

const STORAGE_KEY = 'movie-favorites';

@Injectable({
  providedIn: 'root'
})
export class MovieStorageService {
  constructor(@Inject(SESSION_STORAGE) private storage: WebStorageService) {}

  addMovieToFavorites(movie: Movie) {
    const favoritesList = this.storage.get(STORAGE_KEY) || [];

    for (const favorites of favoritesList) {
      if (favorites.id === movie.id) {
        return;
      }
    }

    favoritesList.push(movie);
    this.storage.set(STORAGE_KEY, favoritesList);
  }

  removeMovieFromFavorites(movie: Movie) {
    const favoritesList = this.storage.get(STORAGE_KEY);
    const filteredList = favoritesList.filter(
      favoriteMovie => favoriteMovie.id !== movie.id
    );
    this.storage.set(STORAGE_KEY, filteredList);
  }
}
