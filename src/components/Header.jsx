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
          <img
            src={process.env.PUBLIC_URL + '/nc-news-logo.png'}
            alt="logo"
            className="logo"
          />
        </Link>
      </div>
      <div className="welcome">
        <Welcome logout={logout} user={user} />
      </div>
    </>
  );
};

export default Header;
