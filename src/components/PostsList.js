import React, { Component } from 'react';
import '../index.css';
import propTypes from 'prop-types';

class PostsList extends Component {
  render() {
    const { posts } = this.props;
    return (
      <div className="posts-list">
        {posts.map((post) => (
          <div className="post-wrapper" key={post._id}>
            <div className="post-header">
              <div className="post-avatar">
                <img
                  src="https://www.flaticon.com/free-icon/profile_3135715?term=profile&page=1&position=4&page=1&position=4&related_id=3135715"
                  alt="user-pic"
                />
                <div>
                  <span className="post-author">{post.user.name}</span>
                  <span className="post-time">a minute ago</span>
                </div>
              </div>
              <div className="post-content">{post.content}</div>

              <div className="post-actions">
                <div className="post-like">
                  <img
                    src="https://www.flaticon.com/free-icon/profile_3135715?term=profile&page=1&position=4&page=1&position=4&related_id=3135715"
                    alt="likes-icon"
                  />
                  <span>{post.likes.length}</span>
                </div>
                s
                <div className="post-comments-icon">
                  <img
                    src="https://www.flaticon.com/free-icon/profile_3135715?term=profile&page=1&position=4&page=1&position=4&related_id=3135715"
                    alt="comments-icon"
                  />

                  <span>{post.comments.length}</span>
                </div>
              </div>
              <div className="post-comment-box">
                <input placeholder="Start typing a comment" />
              </div>

              <div className="post-comments-list">
                <div className="post-comments-item">
                  <div className="post-comment-header">
                    <span className="post-comment-author">Bill</span>
                    <span className="post-comment-time">a minute ago</span>
                    <span className="post-comment-likes">22</span>
                  </div>

                  <div className="post-comment-content">Random comment</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

PostsList.propTypes = {
  posts: propTypes.array.isRequired,
};

export default PostsList;
