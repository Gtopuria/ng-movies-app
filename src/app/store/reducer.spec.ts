import { reducer } from './reducer';
import { FILTER_MOVIES, REQUEST_MOVIES_SUCCESS } from '../movies/movies.actions';
import { genreType } from '../shared/genre-type';
import { REQUEST_MOVIE_SUCCESS } from '../movie/movie.actions';

describe('Reducer', () => {
    it('should have the correct initial state', () => {
        const state = reducer(undefined, {});
        expect(state.movies.length).toBe(0);
        expect(state.movies.length).toBe(0);
        expect(state.activeMovie).toBe(null);
    });

    describe('filterMovies', () => {
        const movies = [
            {
                id: 1,
                key: 'deadpool',
                name: 'Deadpool',
                description: 'A former Special Forces operative turned mercenary is subjected to a rogue experiment that leaves him with accelerated healing powers, adopting the alter ego Deadpool.',
                genres: [genreType.action, genreType.adventure, genreType.comedy],
                rate: '8.6',
                length: '1hr 48mins',
                img: 'deadpool.jpg'
            },
            {
                id: 2,
                key: 'we-are-the-millers',
                name: 'We\'re the Millers',
                description: 'A veteran pot dealer creates a fake family as part of his plan to move a huge shipment of weed into the U.S. from Mexico.',
                genres: [genreType.adventure, genreType.comedy, genreType.crime],
                rate: '7.0',
                length: '1hr 50mins',
                img: 'we-are-the-millers.jpg'
            },
            {
                id: 3,
                key: 'straight-outta-compton',
                name: 'Straight Outta Compton',
                description: 'The group NWA emerges from the mean streets of Compton in Los Angeles, California, in the mid-1980s and revolutionizes Hip Hop culture with their music and tales about life in the hood.',
                genres: [genreType.biography, genreType.drama, genreType.history],
                rate: '8.0',
                length: '2hr 27mins',
                img: 'straight-outta-compton.jpg'
            }
        ];

        it('should store movies in state', () => {
            const state = {
                movies: [],
                filteredMovies: movies,
                activeMovie: null
            };

            const adaptedState = reducer(state, {
                type: REQUEST_MOVIES_SUCCESS,
                movies,
            });

            expect(adaptedState.movies.length).toBe(3);
            expect(adaptedState.filteredMovies.length).toBe(3);
        });

        it('should filter out all movies with bad search', () => {
            const state = {
                movies,
                filteredMovies: movies,
                activeMovie: null
            };

            const adaptedState = reducer(state, {
                type: FILTER_MOVIES,
                searchTerm: 'no movie matched',
                props: ['key', 'genres']
            });
            console.log(adaptedState);

            expect(adaptedState.movies.length).toBe(3);
            expect(adaptedState.filteredMovies.length).toBe(0);
        });

        it('should match a movie with the right string', () => {
            const state = {
                movies,
                filteredMovies: movies,
                activeMovie: null
            };

            const adaptedState = reducer(state, {
                type: FILTER_MOVIES,
                searchTerm: 'Deadpool',
                props: ['key', 'genres']
            });

            expect(adaptedState.movies.length).toBe(3);
            expect(adaptedState.filteredMovies.length).toBe(1);
            const matchedCourse = adaptedState.filteredMovies[0];
            expect(matchedCourse.id).toBe(1);
        });

        it('should store movie while selecting details page', () => {
            const state = {
                movies,
                filteredMovies: movies,
                activeMovie: null
            };

            const adaptedState = reducer(state, {
                type: REQUEST_MOVIE_SUCCESS,
                movie: movies[0]
            });

            const activeMovie = adaptedState.activeMovie;
            expect(activeMovie.id).toBe(1);
        });
    });
});
