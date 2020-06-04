import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import './index.sass';

import {app} from './firebase'
import { defaultRender } from './actions/userAction';

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
        console.log(user)
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
                render={
                  ()=><Main title="Фильмы" />
                }
              />
              <Route exact path="/popular" />
              <Route exact path="/top-rated" />
              <Route exact path="/coming-soon" />
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