import React, { Component } from 'react';
import * as api from '../api';
import Comments from './CommentsList';
import Delete from './Delete';
import PostComment from './PostComment';

class Article extends Component {
  state = { comments: [] };
  render() {
    const { article, user } = this.props;
    const { comments } = this.state;
    return (
      <>
        <h2>{article.title}</h2>
        <p>{article.body}</p>
        <p>Author: {article.author}</p>
        <p>Time: {article.created_at}</p>
        <p>Comments: {article.comment_count}</p>
        <p>Votes: {article.votes}</p>
        <Delete articleId={article.article_id} />
        <PostComment user={user} articleId={article.article_id} />
        <Comments comments={comments} />
      </>
    );
  }

  componentDidMount() {
    this.fetchComments(this.props.article.article_id);
  }

  fetchComments = id => {
    api.getArticleComments(id).then(comments => this.setState({ comments }));
  };
}

export default Article;
