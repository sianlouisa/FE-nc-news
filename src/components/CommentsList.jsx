import React, { Component } from 'react';
import '../components/css/Comments.css';
import PostComment from './PostComment';

class CommentsList extends Component {
  render() {
    const { user, comments, articleId } = this.props;
    return (
      <>
        <PostComment user_id={user.user_id} article_id={articleId} />
        <ul className="comments">
          {comments.map(comment => (
            <li id="comment-item" key={comment.comment_id}>
              {comment.author}
              <br />
              {comment.body}
              <br />
              {comment.created_at}
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default CommentsList;
