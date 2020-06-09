import React from 'react';
import MovieItem from '../../containers/MovieItem/movieItem';

import './movieList.sass'

const List = ({list, addToUserList, removeToUserList, userList, user, auth}) => {

  const movieItems = list.map(movie => {
    return <MovieItem
              key={movie.id}
              id={movie.id}
              voteAverage={movie.vote_average}
              posterPath={movie.poster_path}
              title={movie.title}
              userList = {userList}
              addToUserList={addToUserList}
              removeToUserList={removeToUserList}
              user={user}
              auth={auth}
            />
  });

  return (
    <div className="list-container">{movieItems}</div>
  );

}

export default List;