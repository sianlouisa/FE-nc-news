import React, { Component } from 'react';
import * as api from '../api';
import CommentsList from './CommentsList';
import Delete from './Delete';

class Article extends Component {
  state = { comments: [], article: [] };
  render() {
    const { user } = this.props;
    const { article, comments } = this.state;
    return (
      <>
        <h2>{article.title}</h2>
        <p>{article.body}</p>
        <p>Author: {article.author}</p>
        <p>Time: {article.created_at}</p>
        <p>Comments: {article.comment_count}</p>
        <p>Votes: {article.votes}</p>

        <Delete articleId={article.article_id} />
        <CommentsList
          user={user}
          comments={comments}
          articleId={article.article_id}
        />
      </>
    );
  }

  componentDidMount() {
    this.fetchArticlesById(this.props.id);
    this.fetchComments(this.props.id);
  }

  fetchArticlesById = article_id => {
    api.getArticleById(article_id).then(article => this.setState({ article }));
  };

  fetchComments = id => {
    api.getArticleComments(id).then(comments => this.setState({ comments }));
  };
}

export default Article;
