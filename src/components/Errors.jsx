import React from 'react';
import { Link } from '@reach/router';

const Errors = props => {
  const { message } = props.location.state;
  if (message === 'no articles') {
    return (
      <>
        <h2>No articles for this topic yet.</h2>
        <p>
          <Link to="/post/article">Be the first to post an article!</Link>
        </p>
      </>
    );
  }
  return <h2>{'Something went wrong! :( '}</h2>;
};

export default Errors;
