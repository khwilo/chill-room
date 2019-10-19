import { Injectable } from '@angular/core';

import { Movie } from '../movie';

@Injectable({
  providedIn: 'root'
})
export class MovieListFilterService {
  constructor() {}

  searchByTitle(searchTerm: string, movies: Movie[]): Movie[] {
    searchTerm = searchTerm.toLowerCase();
    return movies.filter(
      (movie: Movie) => movie.title.toLowerCase().indexOf(searchTerm) !== -1
    );
  }
}
