import React from 'react';
import { Link } from '@reach/router';

const Welcome = props => {
  const { name, username } = props.user;
  const { logout } = props;
  return (
    <>
      <span>
        <Link to={`/users/${username}`}>Welcome, {name}!</Link>
      </span>
      <button
        className="mui-btn mui-btn--primary"
        type="submit"
        onClick={logout}
      >
        Logout
      </button>
    </>
  );
};

export default Welcome;
