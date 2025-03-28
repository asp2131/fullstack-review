import React from 'react';
import axios from 'axios';

import Search from './Search.jsx';
import RepoList from './RepoList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      repos: [],
    };

  }

  handleSearch(username) {
    console.log(`Searching: ${username}`);
    // TODO
  });

  render() {
    const { repos } = this.state;

    return (
      <div className="app-view">
        <nav className="main-nav">
          <h1 className="brand-name">Github Fetcher</h1>
        </nav>
        <div className="main-content">
          <Search onSearch={this.handleSearch} />
          <RepoList repos={repos} />
        </div>
      </div>
    );
  }
}

export default App;
