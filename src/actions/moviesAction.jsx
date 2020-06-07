import { app } from '../firebase';

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

export function addToUserList(id, list) {
  return (dispatch) => {
    
      const userUid = app.auth().currentUser.uid;
  
      const onComplete = (error) => {
        if (error) {
          console.log(error)
        } else {
          console.log('success')
          dispatch(addUserList(id, list))
        }
      };
      app.database().ref(userUid).child(list).update({
        [id]: id
      }, onComplete);
      
  };
}

export function removeToUserList(id, list) {
  return (dispatch) => {
    
      const userUid = app.auth().currentUser.uid;
  
      const onComplete = (error) => {
        if (error) {
          console.log(error)
        } else {
          console.log('success')
          dispatch(removeUserList(id,list))
        }
      };
      app.database().ref(userUid).child(list).child(id).remove(onComplete);
      
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

export const addUserList = (id, list) => ({
  type: 'ADD_TO_USER_LIST',
  id, list
});

export const removeUserList = (id, list) => ({
  type: 'REMOVE_TO_USER_LIST',
  id, list
});
