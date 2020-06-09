import React, { Component } from 'react';
import List from '../../components/MovieList/movieList';
import { API_KEY, PATH_BASE, PATH_MOVIE, PATH_SEARCH, DEFAULT_PAGE, PATH_PAGE } from '../../api';

import { connect } from 'react-redux';
import { itemsFetchData } from '../../actions/moviesAction';

class SearchResults extends Component {

  componentDidMount() {
    const {fetchData, searchText} = this.props;
    fetchData(`${PATH_BASE}${PATH_SEARCH}${PATH_MOVIE}?api_key=${API_KEY}&query=${searchText}&${PATH_PAGE}&language=ru`);
  }

  componentDidUpdate(prevProps) {
    const {fetchData} = this.props

    if (this.props.searchText !== prevProps.searchText) {
      fetchData(`${PATH_BASE}${PATH_SEARCH}${PATH_MOVIE}?api_key=${API_KEY}&query=${this.props.searchText}&${PATH_PAGE}&language=ru`);
    }

  }

  render () {
    const { movies , userList, addToUserList, removeToUserList, user } = this.props;
    const { results, } = movies;

    return (
      <div className="content">
        <h1 className="content__title" >{this.props.title}</h1>
        { results &&
          <List
            list={results}
            userList={userList}
            addToUserList={addToUserList}
            removeToUserList={removeToUserList}
            user={user}
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
    searchText: state.searchText
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: (url) => dispatch(itemsFetchData(url)),
    addToUserList: (id, list) => dispatch(addToUserList(id, list)),
    removeToUserList: (id, list) => dispatch(removeToUserList(id,list)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);