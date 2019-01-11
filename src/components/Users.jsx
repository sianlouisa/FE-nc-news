import React, { Component } from 'react';
import * as api from '../api';
import UsersList from './UsersList';

class Users extends Component {
  state = { users: [] };

  render() {
    const { users } = this.state;
    return <UsersList users={users} />;
  }
  componentDidMount() {
    this.fetchUsers(this.props.username);
  }

  fetchUsers = user => {
    api.getUsers(user).then(users => this.setState({ users }));
  };
}

export default Users;
