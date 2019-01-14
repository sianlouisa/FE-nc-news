// import React from 'react';

// const User = props => {
//   console.log(props);
//   return (
//     <>
//       {/* <h2>{users.username}'s Profile</h2>
//       <p>Name: {users.name}</p>
//       <img src={users.avatar_url} alt="profile" /> */}
//     </>
//   );
// };

// export default User;

import React, { Component } from 'react';
import * as api from '../api';

class User extends Component {
  state = { user: {} };
  render() {
    const { user } = this.state;
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
    this.fetchUser(this.props.username);
  }

  fetchUser = username => {
    api.getUsers(username).then(user => this.setState({ user }));
  };
}

export default User;
