import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/movies' },
  { path: 'movies', loadChildren: '../app/movies/movies.module#MoviesModule' },
  { path: 'movies/:id', loadChildren: '../app/movie/movie.module#MovieModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
