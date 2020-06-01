import React from 'react';
import {Link} from 'react-router-dom';

import './login-tickets.sass';
import imgLogin from '../../assets/img/login-icon.svg'

const Login = () => (
  <div className="login-tickets">
    <Link className="" to="/login">
      <img className="login-tickets__img" src={imgLogin} alt=""/>
      <span className="login-tickets__label">Регистрация / Вход</span>
    </Link>
  </div>
);

export default Login;