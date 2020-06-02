import React, { Component } from 'react';
import { API_KEY, PATH_BASE, PATH_MOVIE, DEFAULT_PAGE, PATH_PAGE, PATH_POPULAR } from '../../api';
import List from '../../components/MovieList/movieList';
import { connect } from 'react-redux';
import { itemsFetchData, addFavorite, addWatchLater, removeFavorite, removeWatchLater } from '../../actions/moviesAction';

import './main.sass'

class Main extends Component {

  componentDidMount() {
    this.props.fetchData(`${PATH_BASE}${PATH_MOVIE}${PATH_POPULAR}?api_key=${API_KEY}&${PATH_PAGE}&language=ru`);
  }

  render () {

    const { movies , favorites, watchLater, addFavorite, addWatchLater, removeFavorite, removeWatchLater} = this.props;
    const { results, page } = movies;

    return (
      <div className="content">
        <h1 className="content__title" >{this.props.title}</h1>
        { results &&
          <List
            list={results}
            favorites={favorites}
            watchLater={watchLater}
            addFavorite={addFavorite}
            removeFavorite={removeFavorite}
            addWatchLater={addWatchLater}
            removeWatchLater={removeWatchLater}
         />
        }

        
      </div>
    );

  }
}

const mapStateToProps = (state) => {
  return {
    movies: state.movies,
    hasErrored: state.MoviesHasErrored,
    isLoading: state.MoviesIsLoading,
    favorites: state.favorites,
    watchLater: state.watchLater
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: (url) => dispatch(itemsFetchData(url)),
    addFavorite: (id, vote_average, poster_path, title) => dispatch(addFavorite(id, vote_average, poster_path, title)),
    removeFavorite: (id) => dispatch(removeFavorite(id)),
    addWatchLater: (id, vote_average, poster_path, title) => dispatch(addWatchLater(id, vote_average, poster_path, title)),
    removeWatchLater: (id) => dispatch(removeWatchLater(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
