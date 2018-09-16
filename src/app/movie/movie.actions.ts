import { NgRedux } from '@angular-redux/store';
import { IAppState } from '../store';
import { Injectable } from '@angular/core';
import { MovieService } from '../core/services/movie.service';

export const REQUEST_MOVIE_SUCCESS = 'movie/REQUEST_MOVIE_SUCCESS';

@Injectable()
export class MovieActions {
    constructor(
        private ngRedux: NgRedux<IAppState>,
        private movieService: MovieService
    ) { }

    getMovie(id: number) {
        this.movieService.getMovie(id).subscribe((movie) => {
            this.ngRedux.dispatch({
                type: REQUEST_MOVIE_SUCCESS,
                movie,
            });
        });

    }
}
