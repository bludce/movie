import { combineReducers } from 'redux';
import { items, itemsHasErrored, itemsIsLoading } from './moviesReducer';

export default combineReducers({
    items,
    itemsHasErrored,
    itemsIsLoading
});
