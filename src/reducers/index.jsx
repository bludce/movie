import { combineReducers } from 'redux';
import { movies, MoviesHasErrored, MoviesIsLoading, favorites, watchLater, movie } from './moviesReducer';
import { user } from './userReducer';

export default combineReducers({
    movies,
    MoviesHasErrored,
    MoviesIsLoading,
    favorites,
    watchLater,
    movie,
    user
});
