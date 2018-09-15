import { Injectable } from '@angular/core';
import { IMovie } from '../../shared/interfaces';
import { movies } from '../content';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor() { }

  getMovies(): IMovie[] {
    return movies;
  }
}
