import React from 'react';
import '../components/css/Login.css';
import { Link } from '@reach/router';

const Login = props => {
  const { name, username } = props.user;
  return (
    <div className="login">
      <h2>
        <Link to={`/users/${username}`}>Welcome, {name}!</Link>
      </h2>
    </div>
  );
};

export default Login;
