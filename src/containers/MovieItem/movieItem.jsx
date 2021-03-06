import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './movieItem.sass'

class MovieItem extends Component {

  state = {
    isFavorite: false,
    isWatchLater: false,
  }

  componentDidMount() {
    const {isFavorite, isWatchLater} = this.setState
    const {userList, id} = this.props

    userList.favorites.some((item) => {
      if (item == id) {
        this.setState({
          isFavorite: !isFavorite
        })
      }
    })

    userList.watchLater.some((item) => {
      if (item == id) {
        this.setState({
          isWatchLater: !isWatchLater
        })
      }
    })
  }

  toggleClick = (id, list) => {
    const {isFavorite, isWatchLater} = this.state
    const {addToUserList, removeToUserList} = this.props;

    if (list === 'favorites') {

      this.setState({
        isFavorite: !isFavorite
      })
      
      isFavorite ? removeToUserList(id, list) : addToUserList(id, list);
    } else {
      this.setState({
        isWatchLater: !isWatchLater
      })

      isWatchLater ? removeToUserList(id, list) : addToUserList(id, list);
    }
  }

  renderFavHeart = () => {
    const {id} = this.props
    if (this.props.auth){
      return (
        <svg onClick={() => this.toggleClick(id, 'favorites')} className={this.state.isFavorite ? 'movie-action movie-action__favorite movie-action__favorite--active' : 'movie-action movie-action__favorite'} viewBox="0 0 13 12" xmlns="http://www.w3.org/2000/svg"><path d="M12.903 3.583C12.713 1.507 11.245 0 9.405 0 8.18 0 7.058.66 6.427 1.717 5.8.647 4.725 0 3.52 0 1.68 0 .21 1.507.02 3.583c-.015.092-.076.574.11 1.362.267 1.135.886 2.168 1.79 2.986l4.502 4.087 4.58-4.086c.902-.817 1.52-1.85 1.79-2.985.185-.787.124-1.27.11-1.362z"/></svg>
      )
    }
    else {
      return (
        <Link to="/login">
          <svg className='movie-action movie-action__favorite' viewBox="0 0 13 12" xmlns="http://www.w3.org/2000/svg"><path d="M12.903 3.583C12.713 1.507 11.245 0 9.405 0 8.18 0 7.058.66 6.427 1.717 5.8.647 4.725 0 3.52 0 1.68 0 .21 1.507.02 3.583c-.015.092-.076.574.11 1.362.267 1.135.886 2.168 1.79 2.986l4.502 4.087 4.58-4.086c.902-.817 1.52-1.85 1.79-2.985.185-.787.124-1.27.11-1.362z"/></svg>
        </Link>
      )
    }
  }

  renderWatchLaterClock = () => {
    const {id} = this.props
    if (this.props.auth){
      return (
        <svg onClick={() => this.toggleClick(id, 'watchLater')} className={this.state.isWatchLater ? 'movie-action movie-action__watchlater movie-action__watchlater--active' : 'movie-action movie-action__watchlater'} viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg"><path d="M7.52.1C3.44.1.14 3.4.14 7.5c0 4.06 3.3 7.37 7.38 7.37s7.38-3.3 7.38-7.4C14.9 3.42 11.6.1 7.52.1zm3.26 9.52c-.12.18-.36.24-.55.12l-2.95-1.9-.05-.03H7.2l-.02-.04-.02-.03-.02-.03-.02-.03v-.04-.08-.05l.02-4.8c0-.23.18-.4.4-.4.2 0 .37.17.38.38l-.02 4.6 2.76 1.78c.2.12.24.37.12.55v.02z"/></svg>
      )
    }
    else {
      return (
        <Link to="/login">
          <svg className='movie-action movie-action__watchlater' viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg"><path d="M7.52.1C3.44.1.14 3.4.14 7.5c0 4.06 3.3 7.37 7.38 7.37s7.38-3.3 7.38-7.4C14.9 3.42 11.6.1 7.52.1zm3.26 9.52c-.12.18-.36.24-.55.12l-2.95-1.9-.05-.03H7.2l-.02-.04-.02-.03-.02-.03-.02-.03v-.04-.08-.05l.02-4.8c0-.23.18-.4.4-.4.2 0 .37.17.38.38l-.02 4.6 2.76 1.78c.2.12.24.37.12.55v.02z"/></svg>
        </Link>
      )
    }
  }

  render() {
    const {id, voteAverage, posterPath, title} = this.props

    return (
      <div key={id} className="list-container__movie movie">
          <span className="movie__vote-average">{voteAverage}</span>

          <div className="movie__image">
            <div className="movie-actions">
              
              {this.renderFavHeart()}

              <svg width="10" height="15" className="movie-action movie-action__playtrailer" viewBox="0 0 10 15" xmlns="http://www.w3.org/2000/svg"><path d="M.013.135L9.7 7.5.012 14.865" /></svg>

              {this.renderWatchLaterClock()}
            </div>

            <Link className="movie__link" to={`/movie/${id}`}><img src={`https://image.tmdb.org/t/p/w500${posterPath}`} alt={title}/></Link>
          </div>

          <div className="movie__title">
            {title}
          </div>
        </div>
    )
  }

}

export default MovieItem;