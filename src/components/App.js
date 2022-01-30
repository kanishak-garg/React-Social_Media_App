import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Routes, Link, Route } from 'react-router-dom';
import { fetchPosts } from '../actions/posts';
import propTypes from 'prop-types';
import { Home, Navbar, Page404 } from './';

const Login = () => <div>Login</div>;
const Signup = () => <div>Signup</div>;

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchPosts());
  }

  render() {
    const { posts } = this.props;
    return (
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home posts={posts} />} />
            <Route
              path="/login"
              render={(props) => {
                return <Home {...props} posts={posts} />;
              }}
            />
            <Route path="/signup" element={<Signup />} />
            <Route path="*" element={<Page404 />} />
          </Routes>
        </div>
      </Router>
    );
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts,
  };
}

App.propTypes = {
  posts: propTypes.array.isRequired,
};

export default connect(mapStateToProps)(App);
