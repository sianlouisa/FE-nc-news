import React, { Component } from 'react';
import '../components/css/PostComment.css';
import * as api from '../api';

class PostComment extends Component {
  state = {
    body: '',
  };
  render() {
    return (
      <form className="comment-form" onSubmit={this.handleSubmit}>
        <label htmlFor="newComment" />
        Comment:
        <input
          id="newComment"
          className="comment-text"
          onChange={this.handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    );
  }

  handleChange = event => {
    const body = event.target.value;
    this.setState({ body });
  };

  handleSubmit = event => {
    const { article_id, user_id } = this.props;
    const { body } = this.state;
    event.preventDefault();
    api
      .postCommentOnArticle({ body, article_id, user_id })
      .then(comment => this.props.getNewComment(comment));
  };
}
export default PostComment;
