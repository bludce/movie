import React from 'react';
import MovieItem from '../../components/MovieItem/movieItem';

import './movieList.sass'

const List = ({list, addFavorite}) => {

  const movieItems = list.map(movie => {
    return <MovieItem
              key={movie.id}
              id={movie.id}
              voteAverage={movie.vote_average}
              posterPath={movie.poster_path}
              title={movie.title}
              addFavorite={addFavorite} />
  });

  return (
    <div className="list-container">{movieItems}</div>
  );

}

export default List;