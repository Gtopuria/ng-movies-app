import { Component, OnInit } from '@angular/core';
import { IMovie } from '../shared/interfaces';
import { MovieActions } from './movies.actions';
import { select } from '@angular-redux/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent implements OnInit {

  filter: string;
  @select('filteredMovies') filteredMovies$: Observable<IMovie>;

  constructor(private movieActions: MovieActions) { }

  ngOnInit() {
    this.movieActions.getMovies();
  }

  filterChanged(event: any) {
    event.preventDefault();
    this.movieActions.filterMovies(this.filter);
  }

}
