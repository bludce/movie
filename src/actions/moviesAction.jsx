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

export const addFavorite = (id, vote_average, poster_path, title) => ({
  type: 'ADD_FAVORITES',
  id, vote_average, poster_path, title
});


export const addWatchLater = (id, vote_average, poster_path, title) => ({
  type: 'ADD_WATCH_LATER',
  id, vote_average, poster_path, title
});