import React from 'react';

import './header.sass';

// import components
import Logo from '../Logo/logo'
import SearchBar from '../../containers/SearchBar/searchBar'
import LoginTickets from '../Login-tickets/login-tickets'

const Header = () => (
  <div className="header">
    <Logo />
    <SearchBar />
    <LoginTickets />
  </div>
);

export default Header;