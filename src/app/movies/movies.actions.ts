import { NgRedux } from '@angular-redux/store';
import { IAppState } from '../store';
import { Injectable } from '@angular/core';
import { MovieService } from '../core/services/movie.service';

export const REQUEST_MOVIES_SUCCESS = 'movies/REQUEST_MOVIES_SUCCESS';

@Injectable()
export class MovieActions {
    constructor(
        private ngRedux: NgRedux<IAppState>,
        private movieService: MovieService
    ) { }

    getMovies() {
        const movies = this.movieService.getMovies();
        this.ngRedux.dispatch({
            type: REQUEST_MOVIES_SUCCESS,
            movies,
        });
    }
}
