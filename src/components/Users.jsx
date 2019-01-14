import React, { Component } from 'react';
import * as api from '../api';
import { Link } from '@reach/router';

class Users extends Component {
  state = { users: [] };

  render() {
    const { users } = this.state;
    return (
      <ul className="user-list">
        {users.map(user => (
          <li key={user.user_id} id="user-item">
            <Link to={`/users/${user.username}`}>
              <img src={user.avatar_url} alt="profile" id="avatar-icon" />
              {user.username}
            </Link>
          </li>
        ))}
      </ul>
    );
  }
  componentDidMount() {
    this.fetchUsers();
  }

  fetchUsers = () => {
    api.getUsers().then(users => this.setState({ users }));
  };
}

export default Users;
