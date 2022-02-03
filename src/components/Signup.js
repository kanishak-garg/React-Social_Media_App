import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signup } from '../actions/auth';

class Signup extends Component {
  constructor(props) {
    super(props);
    console.log('props', this.props);

    this.state = {
      name: '',
      email: '',
      password: '',
      confirm_password: '',
    };
  }

  handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    const { name, email, password, confirm_password } = this.state;
    if (name && email && password && confirm_password) {
      this.props.dispatch(signup(name, email, password, confirm_password));
    }
  };

  handleInputChange = (feild, value) => {
    this.setState({
      [feild]: value,
    });
  };

  render() {
    const { error, inProgress } = this.props.auth;
    return (
      <form className="login-form">
        <span className="login-signup-header">Sign up</span>
        {error && <div className="alert error-dailog">{error}</div>}
        <div className="field">
          <input
            type="text"
            placeholder="name"
            required
            onChange={(e) => this.handleInputChange('name', e.target.value)}
            value={this.state.name}
          />
        </div>
        <div className="field">
          <input
            type="email"
            placeholder="Email"
            required
            onChange={(e) => this.handleInputChange('email', e.target.value)}
            value={this.state.email}
          />
        </div>
        <div className="field">
          <input
            type="password"
            placeholder="Password"
            required
            onChange={(e) => this.handleInputChange('password', e.target.value)}
            value={this.state.password}
          />
        </div>
        <div className="field">
          <input
            type="password"
            placeholder="Confirm Password"
            required
            onChange={(e) =>
              this.handleInputChange('confirm_password', e.target.value)
            }
            value={this.state.confirm_password}
          />
        </div>
        <div className="field">
          {inProgress ? (
            <button onClick={this.handleFormSubmit} disabled={inProgress}>
              Signing Up...
            </button>
          ) : (
            <button onClick={this.handleFormSubmit} disabled={inProgress}>
              Sign Up
            </button>
          )}
        </div>
      </form>
    );
  }
}

function mapStateToProps({ auth }) {
  return {
    auth,
  };
}

export default connect(mapStateToProps)(Signup);
