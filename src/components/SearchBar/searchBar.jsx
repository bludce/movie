import React, { Component } from 'react';
import { withRouter , Redirect} from 'react-router-dom';

import './searchBar.sass';
import imgSeacrh from '../../assets/img/search.svg'

import Input from '../Input/input'


class SearchBar extends Component {

  state = {
    searchText: '',
  }

  handleSearchChange = ({ target: { value } }) => {
    this.setState({
      searchText: value,
    })
  }

  handleSearchSubmit = ({key}) => {
    const { searchText } = this.state;

    if (searchText.length > 3 && key === 'Enter') {
      this.props.history.push({
        pathname: `/search`,
        search: `?query=${searchText}`
        }
      )
    }
  }

  render() {
    return (
      <div className="search-bar">
        <Input icon={imgSeacrh} onChange={this.handleSearchChange} onKeyPress={this.handleSearchSubmit} value={this.searchText}/>
      </div>
      
    );
  }
}

export default withRouter(SearchBar);