import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import './input.sass';

const Input = ({icon, onChange, value}) => (
  <Fragment>
    <input 
      type="text" 
      className="input" 
      placeholder="Поиск..." 
      onChange={onChange}
      value={value}
    ></input>
    <img className="input__icon" src={icon}></img>
  </Fragment>
);

Input.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string,
  icon: PropTypes.string,
}

export default Input;