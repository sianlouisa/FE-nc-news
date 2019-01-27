import React, { Component } from 'react';
import * as api from '../api';
import Errors from './Errors';

class User extends Component {
  state = { user: {}, err: null };
  render() {
    const { user, err } = this.state;
    if (err) return <Errors />;
    return (
      <>
        <div className="user-profile">
          <h2>{user.username}'s Profile</h2>
          <p>Name: {user.name}</p>
          <img src={user.avatar_url} alt="profile" className="profile-avatar" />
        </div>
      </>
    );
  }

  componentDidMount() {
    const { username } = this.props;
    this.fetchUser(username);
  }

  fetchUser = username => {
    api
      .getUsers(username)
      .then(user => this.setState({ user }))
      .catch(err => this.setState({ err }));
  };
}

export default User;
