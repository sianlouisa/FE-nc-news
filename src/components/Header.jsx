import React from 'react';
import '../App.css';
import { Link } from '@reach/router';
import Welcome from './Welcome';

const Header = props => {
  const { user, logout } = props;
  return (
    <>
      <div className="header">
        <Link to="/">
          <h1>NC News</h1>
        </Link>
      </div>
      <div className="welcome">
        <Welcome logout={logout} user={user} />
      </div>
    </>
  );
};

export default Header;
