import React, { Component } from 'react';
import './search-panel.css';

export default class SearchPanel extends Component {
  state = {
    term: '',
  };

  onSearchChange = (e) => {
    const term = e.target.value;
    this.setState({ term });
    this.props.onSearchChange(term);
  };

  render() {
    return (
      <form className='search-panel d-flex'>
        <input
          type='text'
          className='form-control'
          placeholder='search'
          value={this.state.term}
          onChange={this.onSearchChange}
        />
      </form>
    );
  }
}
