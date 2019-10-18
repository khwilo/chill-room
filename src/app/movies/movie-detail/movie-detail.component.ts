import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { MovieDataService } from '../services/movie-data.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  movie: any;

  constructor(
    private movieDataService: MovieDataService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const movieID = +params.get('id');
      this.movieDataService.getMovie(movieID).subscribe(foundMovie => {
        console.log(foundMovie);
        this.movie = foundMovie;
      });
    });
  }
}
