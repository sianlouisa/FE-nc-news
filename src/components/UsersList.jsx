import React from 'react';
import { Link } from '@reach/router';

const UsersList = props => {
  const users = props.users;
  return Array.isArray(users) ? (
    <ul>
      {users.map(user => (
        <li key={user.user_id}>
          <Link to={`/users/${user.user_id}`}>{user.username}</Link>
        </li>
      ))}
    </ul>
  ) : (
    <>
      <h2>{users.username}'s Profile</h2>
      <p>Name: {users.name}</p>
      <img src={users.avatar_url} alt="user profile" />
    </>
  );
};

export default UsersList;
