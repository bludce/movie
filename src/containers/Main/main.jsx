import React, { Component } from 'react';
import { API_KEY, PATH_BASE, PATH_MOVIE, DEFAULT_PAGE, PATH_PAGE, PATH_POPULAR } from '../../api';
import List from '../../components/MovieList/movieList';
import { connect } from 'react-redux';
import { itemsFetchData, addToUserList, removeToUserList} from '../../actions/moviesAction';

import './main.sass'

class Main extends Component {

  componentDidMount() {
    const {fetchData, section} = this.props;
    fetchData(`${PATH_BASE}${PATH_MOVIE}${section}?api_key=${API_KEY}&${PATH_PAGE}&language=ru`);
  }

  render () {

    const { movies , userList, addToUserList, removeToUserList, user} = this.props;
    const { results, page } = movies;

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
    hasErrored: state.MoviesHasErrored,
    isLoading: state.MoviesIsLoading,
    userList: state.userList,
    user: state.user
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: (url) => dispatch(itemsFetchData(url)),
    addToUserList: (id, list) => dispatch(addToUserList(id, list)),
    removeToUserList: (id, list) => dispatch(removeToUserList(id,list)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
