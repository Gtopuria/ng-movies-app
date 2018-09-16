import { Injectable } from '@angular/core';
import { IMovie } from '../../shared/interfaces';
import { movies } from '../content';
import { Observable, from, of } from 'rxjs';
import { first } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor() { }

  getMovies(): Observable<IMovie[]> {
    return of(movies).pipe(first());
  }

  getMovie(id: number): Observable<IMovie> {
    return of(movies.find(movie => movie.id === id)).pipe(first());
  }
}
