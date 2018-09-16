import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisplayGenresPipe } from './pipes/display-genres.pipe';
import { TrimDescriptionPipe } from './pipes/trim-description.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [DisplayGenresPipe, TrimDescriptionPipe],
  declarations: [DisplayGenresPipe, TrimDescriptionPipe]
})
export class SharedModule { }
