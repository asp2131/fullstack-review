import React from 'react';
import axios from 'axios';

import Search from './Search.jsx';
import PonyList from './PonyList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      ponies: [],
    };

  }

  handleSearch(pony) {
    console.log(`Searching: ${pony}`);
    // TODO
  });

  render() {
    const { ponies } = this.state;

    return (
      <div className="app-view">
        <nav className="main-nav">
          <h1 className="brand-name">My Little Pony Stable</h1>
        </nav>
        <div className="main-content">
          <Search onSearch={this.handleSearch} />
          <PonyList ponies={ponies} />
        </div>
      </div>
    );
  }
}

export default App;
