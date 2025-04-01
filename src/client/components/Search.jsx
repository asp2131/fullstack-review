import React from 'react';
import PropTypes from 'prop-types';

import '../styles/search.less';

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: ''
    };

  }

  handleChange(e) {
    const username = e.target.value;
  }

  handleClick() {
    // TODO: Handle the click event
  }

  render() {
    const { username } = this.state;

    return (
      <div className='search-container'>
        <div className='search-input-group'>
          <label>Search a Pony</label>
          <input
            value={username}
            onChange={this.handleChange}
            placeholder='Pony name'
          />
        </div>
        <button onClick={this.handleClick} type='button'>
          Add Pony
        </button>
      </div>
    );
  }
}

Search.propTypes = {
  onSearch: PropTypes.func.isRequired
};

export default Search;
