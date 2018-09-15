import { IAppState } from './IAppState';
import { REQUEST_MOVIES_SUCCESS, FILTER_MOVIES } from '../movies/movies.actions';
import { REQUEST_MOVIE_SUCCESS } from '../movie/movie.actions';

const movies = [];

const initialState: IAppState = {
    movies,
    filteredMovies: movies,
    activeMovie: null
};

function storeMovies(state, action): IAppState {
    return Object.assign({}, state, {
        movies: action.movies,
        filteredMovies: action.movies
    });
}

function stringContains(searchTerm: string, prop: any) {
    if (Array.isArray(prop)) {
        for (const p of prop as Array<string>) {
            if (stringContains(searchTerm, p)) {
                return true;
            }
        }
    }
    return prop.toString().toLowerCase().indexOf(searchTerm) > -1;
}

function filterMovies(state, action): IAppState {
    return Object.assign({}, state, {
        filteredMovies: state.movies.filter(item => {
            let match = false;
            for (const prop of action.props) {
                if (match = stringContains(action.searchTerm, item[prop])) {
                    break;
                }
            }
            return match;
        }),
    });
}

function storeMovie(state, action): IAppState {
    return Object.assign({}, state, {
        activeMovie: action.movie
    });
}

export function reducer(state = initialState, action) {
    switch (action.type) {
        case REQUEST_MOVIES_SUCCESS:
            return storeMovies(state, action);
        case FILTER_MOVIES:
            return filterMovies(state, action);
        case REQUEST_MOVIE_SUCCESS:
            return storeMovie(state, action);
        default:
            return state;
    }
}
