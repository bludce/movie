import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux';

import { logout } from '../../actions/userAction';

class Logout extends Component {
  constructor() {
    super()
  }

  componentDidMount() {
    this.props.logoutEvent()
  }

  render() {
    const {user} = this.props;
    const {auth} = user
    if (auth === false) {
      return <Redirect to="/" />
    } else {
      return null
    }
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    logoutEvent: () => dispatch(logout()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Logout);