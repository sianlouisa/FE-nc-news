import React, { Component } from 'react';
import * as api from '../api';
import CommentsList from './CommentsList';
import Delete from './Delete';
import Vote from './Vote';

class Article extends Component {
  state = { article: [] };
  render() {
    const { user } = this.props;
    const { article } = this.state;
    return (
      <>
        <h2>{article.title}</h2>
        <p>{article.body}</p>
        <p>Author: {article.author}</p>
        <p>Time: {article.created_at}</p>
        <p>Comments: {article.comment_count}</p>
        <p>Votes: {article.votes}</p>
        <Delete articleId={article.article_id} />
        <Vote votes={article.votes} article_id={article.article_id} />
        <CommentsList user={user} article_id={article.article_id} />
      </>
    );
  }

  componentDidMount() {
    this.fetchArticlesById(this.props.id);
  }

  fetchArticlesById = article_id => {
    api.getArticleById(article_id).then(article => this.setState({ article }));
  };
}

export default Article;
