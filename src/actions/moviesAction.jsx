export function itemsFetchData(url) {
  return (dispatch) => {
    dispatch(MoviesIsLoading(true));

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }

        dispatch(MoviesIsLoading(false));

        return response;
      })
      .then((response) => response.json())
      .then((movies) => dispatch(MoviesFetchDataSuccess(movies)))
      .catch(() => dispatch(MoviesHasErrored(true)));
  };
}

export function movieFetchData(url) {
  return (dispatch) => {
    dispatch(MoviesIsLoading(true));

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }

        dispatch(MoviesIsLoading(false));

        return response;
      })
      .then((response) => response.json())
      .then((movies) => dispatch(MovieFetchDataSuccess(movies)))
      .catch(() => dispatch(MoviesHasErrored(true)));
  };
}

export function MoviesHasErrored(bool) {
  return {
      type: 'MOVIES_HAS_ERRORED',
      hasErrored: bool
  };
}

export function MoviesIsLoading(bool) {
  return {
      type: 'MOVIES_IS_LOADING',
      isLoading: bool
  };
}

export function MoviesFetchDataSuccess(movies) {
  return {
    type: 'MOVIES_FETCH_DATA_SUCCESS',
    movies
  };
}

export function MovieFetchDataSuccess(movie) {
  return {
    type: 'MOVIE_FETCH_DATA_SUCCESS',
    movie
  };
}

export function removeMovie() {
  return {
    type: 'REMOVE_MOVIE',
  };
}

export const addFavorite = (id) => ({
  type: 'ADD_FAVORITES',
  id
});

export const removeFavorite = (id) => ({
  type: 'REMOVE_FAVORITES',
  id
});


export const addWatchLater = (id) => ({
  type: 'ADD_WATCH_LATER',
  id
});

export const removeWatchLater = (id) => ({
  type: 'REMOVE_WATCH_LATER',
  id
});