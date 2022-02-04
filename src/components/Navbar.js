import React, { useReducer } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineUser, AiOutlineSearch } from 'react-icons/ai';
import { logoutUser } from '../actions/auth';
import { connect } from 'react-redux';

class Navbar extends React.Component {
  handleLogOutClick = () => {
    localStorage.removeItem('token');
    this.props.dispatch(logoutUser());
  };

  render() {
    const { isLoggedIn, user } = this.props.auth;
    return (
      <nav className="nav">
        <div className="left-div">
          <Link to="/">
            <img
              src="https://ninjasfiles.s3.amazonaws.com/0000000000003454.png"
              alt="logo"
            />
          </Link>
        </div>
        <div className="search-container">
          <span className="search-icon">
            <AiOutlineSearch />
          </span>
          <input placeholder="Search" />

          <div className="search-results">
            <ul>
              <li className="search-results-row">
                <AiOutlineUser />
                <span>John Doe</span>
              </li>
              <li className="search-results-row">
                <AiOutlineUser />
                <span>John Doe</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="right-nav">
          {isLoggedIn && (
            <div className="user">
              <AiOutlineUser />
              <span>{user.name}</span>
            </div>
          )}
          <div className="nav-links">
            <ul>
              {isLoggedIn && (
                <div>
                  <li onClick={this.handleLogOutClick}>Log Out</li>
                </div>
              )}
              {!isLoggedIn && (
                <li>
                  <Link to="/login">Log in</Link>
                </li>
              )}
              {!isLoggedIn && (
                <li>
                  <Link to="/signup">Register</Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

function mapStateToProps({ auth }) {
  return {
    auth,
  };
}

export default connect(mapStateToProps)(Navbar);
