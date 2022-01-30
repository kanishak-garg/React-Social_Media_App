import React, { Component } from 'react';
<<<<<<< HEAD
=======
import '../index.css';
import propTypes from 'prop-types';
>>>>>>> c13a990

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
<<<<<<< HEAD
                  src="https://image.flaticon.com/icons/svg/2154/2154651.svg"
                  alt="user-pic"
                />
                <div>
                  <span className="post-author">
                    {post.user.name || 'anonymous'}
                  </span>
=======
                  src="https://www.flaticon.com/free-icon/profile_3135715?term=profile&page=1&position=4&page=1&position=4&related_id=3135715"
                  alt="user-pic"
                />
                <div>
                  <span className="post-author">{post.user.name}</span>
>>>>>>> c13a990
                  <span className="post-time">a minute ago</span>
                </div>
              </div>
              <div className="post-content">{post.content}</div>

              <div className="post-actions">
                <div className="post-like">
                  <img
<<<<<<< HEAD
                    src="https://image.flaticon.com/icons/svg/1077/1077035.svg"
=======
                    src="https://www.flaticon.com/free-icon/profile_3135715?term=profile&page=1&position=4&page=1&position=4&related_id=3135715"
>>>>>>> c13a990
                    alt="likes-icon"
                  />
                  <span>{post.likes.length}</span>
                </div>
<<<<<<< HEAD

                <div className="post-comments-icon">
                  <img
                    src="https://image.flaticon.com/icons/svg/1380/1380338.svg"
                    alt="comments-icon"
                  />
=======
                s
                <div className="post-comments-icon">
                  <img
                    src="https://www.flaticon.com/free-icon/profile_3135715?term=profile&page=1&position=4&page=1&position=4&related_id=3135715"
                    alt="comments-icon"
                  />

>>>>>>> c13a990
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

<<<<<<< HEAD
=======
PostsList.propTypes = {
  posts: propTypes.array.isRequired,
};

>>>>>>> c13a990
export default PostsList;
