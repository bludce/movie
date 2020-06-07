import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import './index.sass';

import {app} from './firebase'
import { defaultRender } from './actions/userAction';

import { PATH_POPULAR, PATH_DISCOVER, PATH_TOP_RATED, PATH_UPCOMING } from './api';

import Header from './containers/Header/header'
import Sidebar from './components/Sidebar/sidebar'
import Main from './containers/Main/main'
import Movie from './containers/Movie/movie'
import Login from './containers/Login/login'
import Logout from './containers/Logout/logout'

class App extends Component {

  componentWillMount = () => {
    app.auth().onAuthStateChanged((user) => {
      if (user) {
        this.props.defaultRender(user)
      }
    })
  }

  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <Header />
          <div className="main-wrapper">
            <div className="sidebar-wrapper">
              <Sidebar />
            </div>
            <div className="content-wrapper">
              <Route exact path="/login" component={Login}/>
              <Route exact path="/logout" component={Logout} />
              <Route exact path="/"
                
              />
              <Route exact path="/popular" render={
                ()=><Main title="Популярное" section={PATH_POPULAR}/>
              }/>
              <Route exact path="/top-rated" render={
                ()=><Main title="Топ рейтинга" section={PATH_TOP_RATED}/>
              }/>
              <Route exact path="/coming-soon" render={
                ()=><Main title="Скоро выйдет" section={PATH_UPCOMING}/>
              }/>
              <Route path="/movie/:id"
                  render={props => (
                    <Movie {...props}
                      id={props.match.params.id}
                     />
                  )}
                />
              <Route path="/search" />
              <Route exact path="/favorites" />
              <Route exact path="/watch-later" />
            </div>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    defaultRender: (user) => dispatch(defaultRender(user)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);