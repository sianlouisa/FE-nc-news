import React from 'react';
import { Link } from '@reach/router';

const Header = () => {
  return (
    <div className="header">
      <h1>
        <Link to="/">NC News</Link>
      </h1>
    </div>
  );
};

export default Header;
