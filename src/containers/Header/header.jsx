import React, { Component } from 'react';
import { connect } from 'react-redux';

import './header.sass';

// import components
import Logo from '../../components/Logo/logo'
import SearchBar from '../../components/SearchBar/searchBar'
import LoginTickets from '../../components/Login-tickets/login-tickets'
import UserMenu from '../../components/UserMenu/userMenu'

class Header extends Component {

  state = {
    userMenuOpen: false
  }

  toggleUserMenu = () => {
    this.setState({
      userMenuOpen: !this.state.userMenuOpen
    })
  }

  render() {
    const {user} = this.props
    const {email, auth } = user

    const {userMenuOpen} = this.state
    return (
      <div className="header">
        <Logo />
        <SearchBar />
        {auth ? 
          (
            <div className="user-wrapper">
              <svg onClick={this.toggleUserMenu} className="user-wrapper-avatar" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="-949 951 100 125"><path fill="#FFF" d="M-899 953.5c-26.2 0-47.5 21.3-47.5 47.5s21.3 47.5 47.5 47.5 47.5-21.3 47.5-47.5-21.3-47.5-47.5-47.5zm28.2 73.2c-1.4-2.5-3.6-4.6-6.5-5.7l-9.9-4.3c-2.6-1-4.4-3.5-4.6-6.3l-.2-1.8c4.6-3.5 7.7-10.3 7.7-17.5 0-10.4-6.6-17.6-14.7-17.6s-14.7 7.2-14.7 17.6c0 7.2 3.1 13.9 7.7 17.5l-.2 1.8c-.2 2.8-2 5.2-4.6 6.3l-9.9 4.3c-2.8 1.1-5.1 3.2-6.5 5.7-6.2-6.8-10-15.8-10-25.7 0-21 17.1-38.1 38.1-38.1S-861 980-861 1001c.1 9.9-3.7 18.9-9.8 25.7z"/></svg>
              <UserMenu
                username={email}
                isOpen={userMenuOpen}
              />
            </div>
          )
          : 
          (
            <LoginTickets />
          )
        }
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);