import React from 'react';

import './logo.sass';
import imgLogo from '../../assets/img/eiga.svg';

const Logo = () => (
  <div className="logo">
    <a className="logo__title" href="/"><img src={imgLogo} alt="Logo"/></a>
  </div>
);

export default Logo;