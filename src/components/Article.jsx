import React, { Component } from 'react';
import * as api from '../api';
import Comments from '../components/Comments';

class Article extends Component {
  state = { comments: [] };

  render() {
    const { article } = this.props;
    const { comments } = this.state;
    return (
      <>
        <h2>{article.title}</h2>
        <p>{article.body}</p>
        <p>Author: {article.author}</p>
        <p>Time: {article.created_at}</p>
        <p>Comments: {article.comment_count}</p>
        <p>Votes: {article.votes}</p>
        <Comments comments={comments} />
      </>
    );
  }

  componentDidMount() {
    this.fetchComments(this.props.article.article_id);
  }

  fetchComments = id => {
    api
      .getArticleComments(id)
      .then(comments => this.setState({ comments, isComments: true }));
  };
}

export default Article;
