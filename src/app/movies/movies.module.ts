import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesRoutingModule } from './movies-routing.module';
import { MoviesComponent } from './movies.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { MovieFavoritesComponent } from './movie-favorites/movie-favorites.component';

@NgModule({
  declarations: [MoviesComponent, MovieDetailComponent, MovieFavoritesComponent],
  imports: [CommonModule, MoviesRoutingModule],
  exports: [MoviesComponent]
})
export class MoviesModule {}
