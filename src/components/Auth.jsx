import React, { Component } from 'react';

class Auth extends Component {
  state = { username: '' };
  render() {
    const { username } = this.state;
    const { handleSubmit, user, children } = this.props;
    return user.user_id ? (
      children
    ) : (
      <form onSubmit={handleSubmit}>
        <label htmlFor="username" />
        <input value={username} id="username" onChange={this.handleChange} />
        <button type="submit">Login</button>
      </form>
    );
  }

  handleChange = event => {
    const username = event.target.value;
    this.setState({ username });
  };
}

export default Auth;
