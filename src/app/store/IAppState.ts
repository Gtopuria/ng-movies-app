import { IMovie } from '../shared/interfaces';

export interface IAppState {
    movies: IMovie[];
    filteredMovies: IMovie[];
    activeMovie: IMovie;
}
