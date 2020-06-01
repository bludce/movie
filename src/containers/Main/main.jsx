import React, { Component } from 'react';
import { API_KEY, PATH_BASE, PATH_MOVIE, DEFAULT_PAGE, PATH_PAGE, PATH_POPULAR } from '../../api';
import List from '../../components/MovieList/movieList';
import { connect } from 'react-redux';
import { itemsFetchData, addFavorite } from '../../actions/moviesAction';

import './main.sass'

class Main extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchData(`${PATH_BASE}${PATH_MOVIE}${PATH_POPULAR}?api_key=${API_KEY}&${PATH_PAGE}&language=ru`);
  }

  render () {

    const { movies , addFavorite} = this.props;
    const { results, page } = movies;

    return (
      <div className="content">
        <h1 className="content__title" >{this.props.title}</h1>
        { results &&
          <List
            list={results}
            addFavorite={addFavorite}
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
    favorites: state.favorites
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: (url) => dispatch(itemsFetchData(url)),
    addFavorite: (id) => dispatch(addFavorite(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
