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
                  src="https://cdn-icons.flaticon.com/png/512/668/premium/668709.png?token=exp=1643365455~hmac=777655a330bd5a1a5419db151be8b48c"
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
                    src="https://cdn-icons.flaticon.com/png/512/668/premium/668709.png?token=exp=1643365455~hmac=777655a330bd5a1a5419db151be8b48c"
                    alt="likes-icon"
                  />
                  <span>{post.likes.length}</span>
                </div>

                <div className="post-comments-icon">
                  <img
                    src="https://cdn-icons.flaticon.com/png/512/668/premium/668709.png?token=exp=1643365455~hmac=777655a330bd5a1a5419db151be8b48c"
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
