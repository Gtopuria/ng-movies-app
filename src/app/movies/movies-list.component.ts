import { Component, OnInit } from '@angular/core';
import { MovieService } from '../core/services/movie.service';
import { IMovie } from '../shared/interfaces';
import { MovieActions } from './movies.actions';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent implements OnInit {

  movies: IMovie[];

  constructor(private movieACtions: MovieActions) { }

  ngOnInit() {
    this.movieACtions.getMovies();
  }

}
