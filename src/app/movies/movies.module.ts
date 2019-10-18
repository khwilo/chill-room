import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesRoutingModule } from './movies-routing.module';
import { MoviesComponent } from './movies.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';

@NgModule({
  declarations: [MoviesComponent, MovieDetailComponent],
  imports: [CommonModule, MoviesRoutingModule],
  exports: [MoviesComponent]
})
export class MoviesModule {}
