import React, { Component } from 'react';
import Button from 'muicss/lib/react/button';

class Auth extends Component {
  state = { username: '' };
  render() {
    const { username } = this.state;
    const { handleSubmit, user, children } = this.props;
    return user !== null ? (
      children
    ) : (
      <>
        <div className="login-wrapper">
          <form className="form-signin" onSubmit={handleSubmit}>
            <h2>Please sign in</h2>
            <input
              type="username"
              id="username"
              value={username}
              className="form-control"
              placeholder="Username"
              onChange={this.handleChange}
              required
            />
            <p>(Please use jessjelly for username)</p>
            <Button variant="raised" color="primary" type="submit">
              Sign in
            </Button>
          </form>
        </div>
      </>
    );
  }

  handleChange = event => {
    const username = event.target.value;
    this.setState({ username });
  };
}

export default Auth;
