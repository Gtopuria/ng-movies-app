import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovieRoutingModule } from './movie-routing.module';
import { MovieActions } from './movie.actions';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    MovieRoutingModule,
    SharedModule
  ],
  providers: [MovieActions],
  declarations: [MovieRoutingModule.components]
})
export class MovieModule { }
