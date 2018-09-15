import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovieRoutingModule } from './movie-routing.module';
import { MovieActions } from './movie.actions';

@NgModule({
  imports: [
    CommonModule,
    MovieRoutingModule
  ],
  providers: [MovieActions],
  declarations: [MovieRoutingModule.components]
})
export class MovieModule { }
