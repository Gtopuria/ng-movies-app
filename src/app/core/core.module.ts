import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieService } from './services/movie.service';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [MovieService],
  declarations: [NavbarComponent],
  exports: [NavbarComponent]
})
export class CoreModule { }
