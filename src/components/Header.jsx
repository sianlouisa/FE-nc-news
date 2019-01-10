import React from 'react';
import '../components/css/Header.css';
import { Link } from '@reach/router';

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <h1>NC News</h1>
      </Link>
    </div>
  );
};

export default Header;
