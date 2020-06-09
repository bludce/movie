import React, { Component } from 'react';
import { connect } from 'react-redux';

import { API_KEY, PATH_BASE, PATH_DISCOVER, PATH_MOVIE, DEFAULT_PAGE, PATH_PAGE } from '../../api';
import List from '../../components/MovieList/movieList';
import Dropdown from 'react-dropdown';

import { itemsFetchData, addToUserList, removeToUserList} from '../../actions/moviesAction';

import './discover.sass';

class Discover extends Component {

  componentDidMount() {
    const {fetchData, section } = this.props;

    fetchData(`${PATH_BASE}${PATH_DISCOVER}${PATH_MOVIE}?api_key=${API_KEY}&${PATH_PAGE}
      &include_adult=false&vote_count.gte=200
      &language=ru`);
  }

  // componentDidUpdate = (prevProps, prevState) => {
  //   if (prevProps.filters !== this.props.filters){
  //     this.getMovies(DEFAULT_PAGE)
  //   }
  // }

  render () {

    const { movies , userList, addToUserList, removeToUserList, user, auth} = this.props;
    const { results } = movies;
    const sort_by = [
      { value: 'popularity', label: 'Popularity' },
      { value: 'vote_average', label: 'Rating' },
      { value: 'original_title', label: 'Original Title' }];
    const sort_by_order = [
      { value: 'asc', label: 'Ascending' },
      { value: 'desc', label: 'Descending' }
    ];

    return (
      <div className="content">
        <h1 className="content__title">{this.props.title}</h1>
        <h2 className="content__tagline">— просмотр фильмов по годам, рейтингу и продолжительности.</h2>

        <div className="sort-order">
          <div className="sort-order__item">
            <span className="sort-order-label">Sort by</span>
            <Dropdown
              className="test"
              options={sort_by}
             />
          </div>
          <div className="sort-order__item">
            <span className="sort-order-label">Order by</span>
            <Dropdown
              className="test"
              options={sort_by_order}
            />
          </div>
        </div>

        { results &&
          <List
            list={results}
            userList={userList}
            addToUserList={addToUserList}
            removeToUserList={removeToUserList}
            user={user}
            auth={auth}
        />
        }
      </div>
    );

  }
}

const mapStateToProps = (state) => {
  return {
    movies: state.movies,
    error: state.error,
    loading: state.loading,
    userList: state.userList,
    user: state.user,
    auth: state.auth,
    favorites: state.favorites,
    watchLater: state.watchLater
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: (url) => dispatch(itemsFetchData(url)),
    addToUserList: (id, list) => dispatch(addToUserList(id, list)),
    removeToUserList: (id, list) => dispatch(removeToUserList(id,list)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Discover);