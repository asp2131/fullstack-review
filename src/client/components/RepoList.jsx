import React from 'react';
import PropTypes from 'prop-types';
const RepoList = props => (
  <div className="repo-list-container">
    <h2 className="text-center">
      Top {props.repos.length} repos by YOUR_CRITERIA
    </h2>
    <ol className="repo-list">
      {
        // TODO
      }
    </ol>
  </div>
);

RepoList.propTypes = {
  repos: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string,
    })
  ).isRequired,
};

export default RepoList;
