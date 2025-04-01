import React from 'react';
import PropTypes from 'prop-types';
const RepoList = props => (
  <div className="repo-list-container">
    <h2 className="text-center">
      {props.ponies.length} ponies in our stable
    </h2>
    <ol className="repo-list">
      {
        // TODO
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
