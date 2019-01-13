import React from 'react';
import { Link } from '@reach/router';

const Welcome = props => {
  const { name, username } = props.user;
  return (
    <h2>
      <Link to={`/users/${username}`}>Welcome, {name}!</Link>
    </h2>
  );
};

export default Welcome;
