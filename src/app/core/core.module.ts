import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieService } from './services/movie.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [MovieService],
  declarations: []
})
export class CoreModule { }
