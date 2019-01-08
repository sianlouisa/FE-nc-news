import React from 'react';
import '../components/css/Header.css';
import { Link } from '@reach/router';

const Header = () => {
  return (
    <div className="header">
      <h1>
        <Link to="/home">NC News</Link>
      </h1>
    </div>
  );
};

export default Header;
