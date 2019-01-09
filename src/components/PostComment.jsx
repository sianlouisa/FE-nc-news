import React, { Component } from 'react';
import '../components/css/PostComment.css';
import * as api from '../api';

class PostComment extends Component {
  state = {
    user_id: '',
    body: '',
  };
  render() {
    return (
      <form className="comment-form" onSubmit={this.handleSubmit}>
        <label htmlFor="newComment" />
        Comment:{' '}
        <input
          id="newComment"
          className="comment-text"
          onChange={this.handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    );
  }

  componentDidMount() {
    this.setState({
      user_id: this.props.user.user_id,
      article_id: this.props.articleId,
    });
  }

  handleChange = event => {
    const body = event.target.value;
    this.setState({ body });
  };

  handleSubmit = event => {
    event.preventDefault();
    api.postCommentOnArticle(this.state).then(cmnt => console.log(cmnt));
  };
}

export default PostComment;
