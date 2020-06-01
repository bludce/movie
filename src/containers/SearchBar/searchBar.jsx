import React, { Component } from 'react';

import './searchBar.sass';
import imgSeacrh from '../../assets/img/search.svg'

import Input from '../../components/Input/input'

class SearchBar extends Component {

  state = {
    searchText: '',
  }

  handleInputChange = ({ target: { value } }) => {
    this.setState({
      searchText: value,
    })
  }

  render() {
    return (
      <div className="search-bar">
        <Input icon={imgSeacrh} onChange={this.handleInputChange} value={this.searchText}/>
      </div>
      
    );
  }
}

export default SearchBar