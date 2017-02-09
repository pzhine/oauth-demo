import React from 'react';

const Login = React.createClass({
  onLoginButton() {
    console.log('onLoginButton');
  },
  render() {
    return (
      <div>
        <button onClick={this.onLoginButton}>Login with GitHub</button>
      </div>
    );
  }
});

export default Login;