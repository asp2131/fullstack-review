import React from 'react';
import PropTypes from 'prop-types';
import Pony from './Pony.jsx';

const RepoList = props => (
  <div className="repo-list-container">
    <h2 className="text-center">
      {props.ponies.length} {props.ponies.length === 1 ? "pony" : props.ponies.length > 1 ? "ponies" : 0} in our little stable 
    </h2>
    <ol className="repo-list">
      {
        props.ponies.map(pony => <Pony key={pony.name} pony={pony} />)
      }
    </ol>
  </div>
);

RepoList.propTypes = {
  ponies: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string,
    })
  ).isRequired,
};

export default RepoList;
