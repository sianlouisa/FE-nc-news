import React, { Component } from 'react';
import '../components/css/Comments.css';
import PostComment from './PostComment';

class CommentsList extends Component {
  state = { newComment: [], isNewComment: false };
  render() {
    const { newComment, isNewComment } = this.state;
    const { user, comments, articleId } = this.props;
    console.log(newComment);
    return !isNewComment ? (
      <>
        <PostComment
          user_id={user.user_id}
          getNewComment={this.getNewComment}
          article_id={articleId}
        />
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
    ) : (
      <>
        <p>Post Successful</p>
        <ul className="comments">
          <li id="new-comment-item" key={newComment.comment_id}>
            {user.username}
            <br />
            {newComment.body}
            <br />
            {newComment.created_at}
          </li>
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

  getNewComment = newComment => {
    this.setState({ newComment, isNewComment: true });
  };
}

export default CommentsList;
