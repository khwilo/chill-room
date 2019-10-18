import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MovieDataService {
  private API_KEY = '3eecee526fe0617a361b0ba811300b2a';
  private LANGUAGE = 'en-US';
  page = 1;
  private BASE_URL = `https://api.themoviedb.org/3/movie`;

  constructor(private http: HttpClient) {}

  fetchAllMovies() {
    const popularMoviesUrl = `${this.BASE_URL}/popular?api_key=${this.API_KEY}&language=${this.LANGUAGE}&page=${this.page}`;
    return this.http.get(popularMoviesUrl).pipe(catchError(this.handleError));
  }

  getMovie(movieId: number) {
    const movieDetailUrl = `${this.BASE_URL}/${movieId}?api_key=${this.API_KEY}&language=${this.LANGUAGE}`;
    return this.http.get(movieDetailUrl).pipe(catchError(this.handleError));
  }

  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Server responded with status ${error.status}. Error message: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
