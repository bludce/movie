import React from 'react';
import MovieItem from '../../containers/MovieItem/movieItem';

import './movieList.sass'

const List = ({list, addFavorite, addWatchLater, removeFavorite, removeWatchLater, favorites, watchLater}) => {

  const movieItems = list.map(movie => {
    return <MovieItem
              key={movie.id}
              id={movie.id}
              voteAverage={movie.vote_average}
              posterPath={movie.poster_path}
              title={movie.title}
              favorites={favorites}
              watchLater={watchLater}
              addFavorite={addFavorite}
              removeFavorite={removeFavorite}
              removeWatchLater={removeWatchLater}
              addWatchLater={addWatchLater} />
  });

  return (
    <div className="list-container">{movieItems}</div>
  );

}

export default List;