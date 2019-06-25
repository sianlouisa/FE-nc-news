import React from 'react';
import '../App.css';
import { Link } from '@reach/router';
import Button from 'muicss/lib/react/button';

const Header = (props) => {
  const { user, logout } = props;
  return (
    <div className="welcome">
      <p>
        Hi,
        {' '}
        <Link to={`/users/${user.username}`}>{`${user.name}!`}</Link>
      </p>
      <Button size="small" className="btn" type="submit" onClick={logout}>
        Logout
      </Button>
    </div>
  );
};

export default Header;
