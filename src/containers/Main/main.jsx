import React, { Component } from 'react';
import { API_KEY, PATH_BASE, PATH_MOVIE, DEFAULT_PAGE, PATH_PAGE, PATH_POPULAR } from '../../api';
import List from '../../components/MovieList/movieList';

import './main.sass'

class Main extends Component {

  constructor(props) {
    super(props);

    this.state = {
      movies: {},
      loading: true
    };

  }

  componentDidMount = () => {
    this.getMovies(this.props.section, DEFAULT_PAGE)
  }

  getMovies = (section, page) => {
    fetch(`${PATH_BASE}${PATH_MOVIE}${PATH_POPULAR}?api_key=${API_KEY}&${PATH_PAGE}${page}&language=ru`)
    .then(response => response.json())
    .then(movies => this.setMovies(movies));
  }

  setMovies = (movies) => {
    const { results, page } = movies;

    const oldResults = page !== 1
      ? this.state.movies.results
      : []

    const updatedResults = [
      ...oldResults,
      ...results
    ]

    this.setState({
      movies: { results: updatedResults, page },
      loading: false
    })
  }

  render () {

    const { movies } = this.state;
    const { results, page } = movies;

    return (
      <div className="content">
        <h1 className="content__title">{this.props.title}</h1>

        { results &&
          <List
            list={results}
            addToList={(selectedMovie, userList) => this.props.addToList(selectedMovie, userList)}
            removeFromList={(selectedMovie, userList) => this.props.removeFromList(selectedMovie, userList)}
            authenticated={this.props.authenticated}
            favorites={this.props.favorites}
            watchLater={this.props.watchLater}
         />
        }

        
      </div>
    );

  }
}

export default Main;