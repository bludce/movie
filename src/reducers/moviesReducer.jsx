export function MoviesHasErrored(state = false, action) {
  switch (action.type) {
      case 'MOVIES_HAS_ERRORED':
          return action.hasErrored;

      default:
          return state;
  }
}

export function MoviesIsLoading(state = false, action) {
  switch (action.type) {
      case 'MOVIES_IS_LOADING':
          return action.isLoading;

      default:
          return state;
  }
}

export function movies(state = [], action) {
  switch (action.type) {
      case 'MOVIES_FETCH_DATA_SUCCESS':
          return action.movies;

      default:
          return state;
  }
}

export function movie(state = [], action) {
  switch (action.type) {
      case 'MOVIE_FETCH_DATA_SUCCESS':
          return action.movie;
      case 'REMOVE_MOVIE':
        return [];

      default:
          return state;
  }
}

const initialUsetListState = {
  favorites: [], 
  watchLater: []
}

export const userList = (state = initialUsetListState, {type, id, list}) => {
  switch (type) {
    case 'ADD_TO_USER_LIST': 
      return {
        ...state,
        [list]: [...state[list], {id}]
      }

    case 'REMOVE_TO_USER_LIST':
      return {
        ...state,
        [list]: state[list].filter(movie => movie.id !== id)
      }
    default:
      return state;
  }
}