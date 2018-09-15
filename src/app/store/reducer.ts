import { IAppState } from './IAppState';
import { REQUEST_MOVIES_SUCCESS } from '../movies/movies.actions';

const movies = [];

const initialState: IAppState = {
    movies,
};

function storeMovies(state, action): IAppState {
    return Object.assign({}, state, {
        movies: action.movies,
    });
}

export function reducer(state = initialState, action) {
    switch (action.type) {
        case REQUEST_MOVIES_SUCCESS:
            return storeMovies(state, action);
        default:
            return state;
    }
}
