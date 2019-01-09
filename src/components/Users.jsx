import React, { Component } from 'react';
import * as api from '../api';
import UsersList from './UsersList';

class Users extends Component {
  state = { users: [], user: [], isSingleUser: false };

  render() {
    const { users, user, isSingleUser } = this.state;
    return !isSingleUser ? (
      <UsersList users={users} />
    ) : (
      <UsersList users={user} />
    );
  }
  componentDidMount() {
    this.fetchUsers();
  }

  componentDidUpdate(prevProps, prevState) {
    const userId = this.props.id;
    if (userId !== prevProps.id) {
      this.fetchUserById(this.props.id);
      this.setState({ isSingleUser: true });
    }
  }

  fetchUsers = () => {
    api.getUsers().then(users => this.setState({ users }));
  };

  fetchUserById = user => {
    api.getUserById(user).then(user => this.setState({ user }));
  };
}

export default Users;
