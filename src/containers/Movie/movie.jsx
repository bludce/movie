import React, { Component } from 'react';
import { connect } from 'react-redux';

import { API_KEY, PATH_BASE, PATH_MOVIE } from '../../api';
import { movieFetchData, addFavorite, addWatchLater, removeFavorite, removeWatchLater } from '../../actions/moviesAction';

import './movie.sass'

class Movie extends Component {

  state = {
    isFavorite: false,
    isWatchLater: false
  };

  componentDidMount = () => {
    const {isFavorite, isWatchLater} = this.setState
    const {favorites, watchLater, id} = this.props

    favorites.some((item) => {
      if (item.id == id) {
        this.setState({
          isFavorite: !isFavorite
        })
      }
    })

    watchLater.some((item) => {
      if (item.id == id) {
        this.setState({
          isWatchLater: !isWatchLater
        })
      }
    })

    const MOVIE_ID = this.props.match.params.id;

    this.props.fetchData(`${PATH_BASE}${PATH_MOVIE}/${MOVIE_ID}?api_key=${API_KEY}&append_to_response=videos&language=ru`);
  }

  toggleFavoriteClick = (id, voteAverage, posterPath, title) => {
    const {isFavorite} = this.state
    this.setState({
      isFavorite: !isFavorite,
    })
    const {addFavorite, removeFavorite} = this.props;
    isFavorite ? removeFavorite(id) : addFavorite(id, voteAverage, posterPath, title);
    
  }

  toggleWatchLaterClick = (id, voteAverage, posterPath, title) => {
    const {isWatchLater} = this.state
    this.setState({
      isWatchLater: !isWatchLater,
    })
    const {addWatchLater, removeWatchLater} = this.props;
    isWatchLater ? removeWatchLater(id) : addWatchLater(id, voteAverage, posterPath, title);
  }

  render () {

    const { title, poster_path, backdrop_path, overview, vote_average, id } = this.props.movie;
    const {isFavorite, isWatchLater} = this.state;

    const movieBackdropStyles = {
      backgroundImage: `url(https://image.tmdb.org/t/p/original${backdrop_path})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover"
    };
    
    return (
      <div className="single-movie">
        <div className="single-movie__backdrop" style={movieBackdropStyles}></div>
        <div className="single-movie__content">
          <div>
            <img className="single-movie__poster" src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt=""/>
          </div>
          <div className="single-movie__data">
            <h1 className="single-movie__title">{title}</h1>

            <div className="single-movie-actions">

              <div className="single-movie-actions__item">
                <span className="single-movie-action__circle" onClick={() => this.toggleFavoriteClick(id, vote_average, poster_path, title)} >
                  <svg className={isFavorite ? 'single-action single-action__favorite single-action__favorite--isActive' : 'single-action single-action__favorite'} viewBox="0 0 13 12" xmlns="http://www.w3.org/2000/svg"><path d="M12.903 3.583C12.713 1.507 11.245 0 9.405 0 8.18 0 7.058.66 6.427 1.717 5.8.647 4.725 0 3.52 0 1.68 0 .21 1.507.02 3.583c-.015.092-.076.574.11 1.362.267 1.135.886 2.168 1.79 2.986l4.502 4.087 4.58-4.086c.902-.817 1.52-1.85 1.79-2.985.185-.787.124-1.27.11-1.362z"/></svg>
                </span>
              </div>

              <div className="single-movie-actions__item">
                <span className="single-movie-action__circle">
                  <svg width="10" height="15" className="single-action" viewBox="0 0 10 15" xmlns="http://www.w3.org/2000/svg"><path d="M.013.135L9.7 7.5.012 14.865" /></svg>
                </span>
              </div>

              <div className="single-movie-actions__item">
                <span className="single-movie-action__circle" onClick={() => this.toggleWatchLaterClick(id, vote_average, poster_path, title)} >
                <svg className={isWatchLater ? 'single-action single-action__watchlater single-action__watchlater--isActive' : 'single-action single-action__watchlater'}  viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg"><path d="M7.52.1C3.44.1.14 3.4.14 7.5c0 4.06 3.3 7.37 7.38 7.37s7.38-3.3 7.38-7.4C14.9 3.42 11.6.1 7.52.1zm3.26 9.52c-.12.18-.36.24-.55.12l-2.95-1.9-.05-.03H7.2l-.02-.04-.02-.03-.02-.03-.02-.03v-.04-.08-.05l.02-4.8c0-.23.18-.4.4-.4.2 0 .37.17.38.38l-.02 4.6 2.76 1.78c.2.12.24.37.12.55v.02z"/></svg>
                </span>
              </div>

            </div>

            <h3 className="single-movie-overview__title">Описание</h3>
            <p className="single-movie-overview">{overview}</p>
          </div>
        </div>
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
    watchLater: state.watchLater,
    movie: state.movie
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: (url) => dispatch(movieFetchData(url)),
    addFavorite: (id, vote_average, poster_path, title) => dispatch(addFavorite(id, vote_average, poster_path, title)),
    removeFavorite: (id) => dispatch(removeFavorite(id)),
    addWatchLater: (id, vote_average, poster_path, title) => dispatch(addWatchLater(id, vote_average, poster_path, title)),
    removeWatchLater: (id) => dispatch(removeWatchLater(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Movie);
