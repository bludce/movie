import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { authWithEmailPassword } from '../../actions/userAction';

import './login.sass';

class Login extends Component {

  state = {
    email: '',
    password: '',
  }

  handleInputChange = (e) => {
    this.setState({
        [e.target.name]: e.target.value
    })
  }

  authWithEmailPassword(e) {
    e.preventDefault()
    const {email, password} = this.state

    this.props.authWithEmailPasswordClick(email, password)
  }
  
  render () {

    const { from } = this.props.location.state || { from: { pathname: '/' } }
    const { auth } = this.props

    if (auth) {
      return (
        <Redirect to={from} />
      )
    }

    return (
      <div className="Main-wrapper">
        <div className="Login-wrapper">
          <h1 className="App-main-title login-form-title">Присоединяйтесь!</h1>
          <div className="login-form-notice">Если у вас еще нет учетной записи, эта форма создаст ее для вас.</div>

          <form className="login-form eiga-form" onSubmit={(event) => this.authWithEmailPassword(event)} ref={(form) => { this.loginForm = form }}>
            <div className="login-form-content">
              <label className="" htmlFor="email">
                Email
              </label>
              <input className="" id="email" name="email" type="email" placeholder="Email" onChange={this.handleInputChange}></input>
              <label className="" htmlFor="password">
                Password
              </label>
              <input className="" id="password" name="password" type="password"  placeholder="Password" onChange={this.handleInputChange}></input>
              <input type="submit" className="button login-form-submit" value="Log In"></input>
            </div>
          </form>

          <div className="alternate-login">Or</div>
          
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    auth: state.auth
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    authWithEmailPasswordClick: (email, password) => dispatch(authWithEmailPassword(email, password)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);