import React from 'react';
import { Link } from 'react-router-dom';

import './userMenu.sass';

const UserMenu = ({isOpen, username, logout}) => {

  const userMenuClasses = `user-menu ${isOpen && 'is-open'}`;

  return (
    <div className={userMenuClasses}>
      <span className="user-menu__greetings">{username}</span>
      <ul className="user-menu-list">
        <li><Link className="user-menu-list__item" to="/favorites">Любимые</Link></li>
        <li><Link className="user-menu-list__item" to="/watch-later">Посмотреть позже</Link></li>
        <li><Link className="user-menu-list__item user-menu-list__item--logout" logout={logout} to="/logout">Выход</Link></li>
      </ul>
    </div>
  );

}

export default UserMenu;