import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

import { Movie } from '../movie';
import { MovieDataService } from '../services/movie-data.service';
import { MovieStorageService } from '../services/movie-storage.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  movie: any;
  cast: any;
  crew: any;
  BASE_IMAGE_URL = 'http://image.tmdb.org/t/p/w1280/';
  backdropPath: string;

  addIcon = faPlus;
  removeIcon = faMinus;

  constructor(
    private movieDataService: MovieDataService,
    private route: ActivatedRoute,
    private movieStorageService: MovieStorageService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const movieID = +params.get('id');
      this.movieDataService.getMovie(movieID).subscribe(data => {
        this.movie = data;
        this.backdropPath = data['backdrop_path'];
      });
      this.movieDataService.getCredits(movieID).subscribe(data => {
        this.cast = data['cast'];
        this.crew = data['crew'];
      });
    });
  }

  setBackgroundImage() {
    const styles = {
      'background-size': 'cover',
      'background-image': `url(${this.BASE_IMAGE_URL}${this.backdropPath})`,
      'background-color': '#3c3c3c',
      'background-repeat': 'no-repeat'
    };
    return styles;
  }

  addToFavorites(movie: Movie) {
    this.movieStorageService.addMovieToFavorites(movie);
  }

  removeFromFavorites(movie: Movie) {
    this.movieStorageService.removeMovieFromFavorites(movie);
  }
}
