import { combineReducers } from 'redux';
import { movies, MoviesHasErrored, MoviesIsLoading, userList, movie } from './moviesReducer';
import { user } from './userReducer';

export default combineReducers({
    movies,
    MoviesHasErrored,
    MoviesIsLoading,
    userList,
    movie,
    user
});
