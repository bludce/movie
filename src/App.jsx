import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import './index.sass';

import Header from './components/Header/header'
import Sidebar from './components/Sidebar/sidebar'
import Main from './containers/Main/main'
import Movie from './containers/Movie/movie'

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <Header />
          <div className="main-wrapper">
            <div className="sidebar-wrapper">
              <Sidebar />
              {/* footer */}
            </div>
            <div className="content-wrapper">
              <Route exact path="/login" />
              <Route exact path="/logout"  />
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

export default App