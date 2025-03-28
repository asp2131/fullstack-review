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
          <label>Github Username</label>
          <input
            value={username}
            onChange={this.handleChange}
            placeholder='Github Username'
          />
        </div>
        <button onClick={this.handleClick} type='button'>
          Add Repos
        </button>
      </div>
    );
  }
}

Search.propTypes = {
  onSearch: PropTypes.func.isRequired
};

export default Search;
