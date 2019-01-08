import React, { Component } from 'react';

class Auth extends Component {
  state = { username: '' };
  render() {
    const { username } = this.state;
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <label htmlFor="login" />
        <input
          type="text"
          value={username}
          id="login"
          onChange={this.handleChange}
        />
        <button>Login</button>
      </form>
    );
  }

  handleChange = event => {
    const { username } = event.target.value;
    this.setState({ username });
  };
}

export default Auth;
