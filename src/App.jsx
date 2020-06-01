import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import './index.sass';

import Header from './components/Header/header'

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <div className="App-main">
            <div className="App-sidebar-wrapper">
              {/* sidebar */}
              {/* footer */}
            </div>
              <div className="App-content-wrapper">
                <Route exact path="/login"  />
                <Route exact path="/logout"  />
                <Route exact path="/" />
                <Route exact path="/popular" />
                <Route exact path="/top-rated" />
                <Route exact path="/coming-soon" />
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