import React, { Component } from 'react';
import '../App.css';
import PostComment from './PostComment';
import CommentsCard from './CommentsCard';
import * as api from '../api';

class CommentsList extends Component {
  state = {
    loadedComment: false,
    comments: [],
  };

  render() {
    const { user, article_id } = this.props;
    const { comments, loadedComments } = this.state;

    return (
      <>
        <PostComment
          user_id={user.user_id}
          getNewComment={this.getNewComment}
          article_id={article_id}
        />
        {loadedComments && comments.length > 0 ? (
          <CommentsCard comments={comments} article_id={article_id} />
        ) : (
          <p>Loading</p>
        )}
        {comments.length === 0 && <p>Be the first to comment!</p>}
      </>
    );
  }

  componentDidUpdate() {
    this.fetchComments(this.props.article_id);
  }

  fetchComments = id => {
    api
      .getArticleComments(id)
      .then(comments => this.setState({ comments, loadedComments: true }));
  };

  getNewComment = comment => {
    this.setState({
      comments: [...this.state.comments, comment],
    });
  };
}

export default CommentsList;
