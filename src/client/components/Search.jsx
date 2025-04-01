import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import '../styles/search.less';

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      ponyname: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(e) {
    const ponyname = e.target.value;

    this.setState({
      ponyname
    });
  }

  async handleClick() {
    console.log(this.state)
    const pony  = this.state.ponyname;
    // TODO: Handle the click event
    const res = await axios.post(`/api/ponies`, {
      pony 
    });
    const {data: ponies} = res;
    this.props.updatePonies(ponies);
  }

  render() {
    const { ponyname } = this.state;

    return (
      <div className='search-container'>
        <div className='search-input-group'>
          <label>Pony name</label>
          <input
            value={ponyname}
            onChange={this.handleChange}
            placeholder='Pony Name'
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
  updatePonies: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired
};

export default Search;
