import React from 'react';
import '../components/css/Login.css';

const Login = props => {
  const { name } = props.user;
  return (
    <div className="login">
      <p>Welcome, {name}!</p>
      <button>Logout</button>
    </div>
  );
};

export default Login;
