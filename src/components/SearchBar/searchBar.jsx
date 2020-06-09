import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { searchText } from '../../actions/moviesAction';

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

    if (key === 'Enter') {
      this.props.searchText(searchText)
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

const mapStateToProps = (state) => {
  return {
    searchText: state.searchText,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    searchText: (text) => dispatch(searchText(text)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SearchBar));
