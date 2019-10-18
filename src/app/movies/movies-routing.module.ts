import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MoviesComponent } from './movies.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';

const routes: Routes = [
  { path: 'movies', component: MoviesComponent },
  { path: 'movies/:id', component: MovieDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesRoutingModule {}
