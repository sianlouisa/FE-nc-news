import React from 'react';
import { Link } from '@reach/router';
import Button from 'muicss/lib/react/button';

const Welcome = props => {
  const { name, username } = props.user;
  const { logout } = props;
  return (
    <>
      <p>
        Hi, <Link to={`/users/${username}`}>{name}</Link>!
      </p>
      <span>
        <Button size="small" color="primary" type="submit" onClick={logout}>
          Logout
        </Button>
      </span>
    </>
  );
};

export default Welcome;
