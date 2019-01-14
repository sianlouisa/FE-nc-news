import React from 'react';
import { Link } from '@reach/router';
import Button from 'muicss/lib/react/button';

const Welcome = props => {
  const { name, username } = props.user;
  const { logout } = props;
  return (
    <>
      <span>
        {'Hi, '}
        <Link to={`/users/${username}`}>{name}</Link>
        {'!'}
      </span>
      <br />
      <Button size="small" type="submit" onClick={logout}>
        Logout
      </Button>
    </>
  );
};

export default Welcome;
