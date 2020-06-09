import { combineReducers } from 'redux';
import { movies, userList, movie, searchText } from './moviesReducer';
import { user } from './userReducer';

function error(state = false, action) {
    switch (action.type) {
        case 'ERROR':
            return action.hasErrored;
  
        default:
            return state;
    }
  }
  
function loading(state = false, action) {
    switch (action.type) {
        case 'LOADING':
            return action.isLoading;
  
        default:
            return state;
    }
  }


export default combineReducers({
    movies,
    error,
    loading,
    userList,
    movie,
    searchText,
    user
});
