import { combineReducers } from 'redux';
import { movies, MoviesHasErrored, MoviesIsLoading, favorites, watchLater, movie } from './moviesReducer';

export default combineReducers({
    movies,
    MoviesHasErrored,
    MoviesIsLoading,
    favorites,
    watchLater,
    movie
});
