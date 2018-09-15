import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MoviesRoutingModule } from './movies-routing.module';
import { SharedModule } from '../shared/shared.module';
import { MovieActions } from './movies.actions';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MoviesRoutingModule,
    SharedModule
  ],
  providers: [MovieActions],
  declarations: [MoviesRoutingModule.components]
})
export class MoviesModule { }
