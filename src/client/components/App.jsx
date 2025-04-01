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

    this.updatePonies = this.updatePonies.bind(this);
  }

  async componentDidMount(){
    const res = await axios.get('/api/ponies');

    const {data: ponies} = res;

    this.setState({
      ponies
    });
  }

  updatePonies(ponies){
    this.setState({
      ponies
    });
  }

  handleSearch(username) {
    console.log(`Searching: ${username}`);
    // TODO
  }

  render() {
    const { ponies } = this.state;

    return (
      <div className="app-view">
        <nav className="main-nav">
          <h1 className="brand-name">Pony Fetcher</h1>
        </nav>
        <div className="main-content">
          <Search updatePonies={this.updatePonies} onSearch={this.handleSearch} />
          <PonyList ponies={ponies} />
        </div>
      </div>
    );
  }
}

export default App;
