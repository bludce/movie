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

export const favorites = (state = [], {type, id}) => {
  switch (type) {
    case 'ADD_FAVORITES': 
      return [...state, {id}]
      break;
    default:
      return state;
  }
}

export const watchLater = (state = [], {type, id}) => {
  switch (type) {
    case 'ADD_WATCH_LATER': 
      return [...state, {id}]
      break;
    default:
      return state;
  }
}