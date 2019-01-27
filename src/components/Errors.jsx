import React from 'react';
import { Link } from '@reach/router';

const Errors = props => {
  return (
    <>
      <h1>404</h1>
      <p>{'Oh no! Looks like something went wrong :('}</p>
      <p>
        <Link to="/">Back to home</Link>
      </p>
    </>
  );
};

export default Errors;
