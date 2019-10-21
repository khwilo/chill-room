import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MoviesComponent } from './movies.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { MovieFavoritesComponent } from './movie-favorites/movie-favorites.component';

const routes: Routes = [
  { path: 'movies', component: MoviesComponent },
  { path: 'movies/favorites', component: MovieFavoritesComponent },
  { path: 'movies/:id', component: MovieDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesRoutingModule {}
