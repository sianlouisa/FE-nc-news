import React from 'react';
import '../components/css/Header.css';
import { Link } from '@reach/router';
import Login from './Login';

const Header = props => {
  const { user } = props;
  return (
    <div className="header">
      <Link to="/">
        <h1>NC News</h1>
      </Link>
      <Login user={user} />
    </div>
  );
};

export default Header;
