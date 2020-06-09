import React, { Component } from 'react';
import { connect } from 'react-redux';

import { API_KEY, PATH_BASE, PATH_MOVIE } from '../../api';
import List from '../../components/MovieList/movieList';

import { addToUserList, removeToUserList} from '../../actions/moviesAction';


import './userList.sass';

class UserList extends Component {

  constructor(props) {
    super(props);

    this.state = {
      movies: [],
    };

  }

  getMovieObject = async (movieId) => {
    const response = await fetch(`${PATH_BASE}${PATH_MOVIE}/${movieId}?api_key=${API_KEY}&append_to_response=videos&language=ru`);
    return await response.json();
  }

  getAllMoviesFromList = (list) => {
    const promises = list.map(item => this.getMovieObject(item));
    Promise.all(promises).then(userListMovies =>
      this.setState({
        movies: userListMovies,
      })
    )
  }

  componentDidMount = () => {
    switch (this.props.list) {
      case 'favorites':
        this.getAllMoviesFromList(this.props.userList.favorites)
        break;
      case 'watchLater':
        this.getAllMoviesFromList(this.props.userList.watchLater)
        break;
      default:
    }
  }
  
  render () {

    const { movies } = this.state;
    const { userList, addToUserList, removeToUserList, user, auth} = this.props;

    return (
      <div className="content">
        <h1 className="content__title">{this.props.title}</h1>

        {movies &&
          <List
          list={movies}
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
    error: state.error,
    loading: state.loading,
    userList: state.userList,
    user: state.user,
    auth: state.auth
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToUserList: (id, list) => dispatch(addToUserList(id, list)),
    removeToUserList: (id, list) => dispatch(removeToUserList(id,list)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
