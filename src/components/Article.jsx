import React, { Component } from 'react';
import * as api from '../api';
import CommentsCard from './CommentsCard';
import PostComment from './PostComment';
import Delete from './Delete';
import Vote from './Vote';

class Article extends Component {
  state = { article: [], comments: [], loadedComments: false };
  render() {
    const { user } = this.props;
    const { article, loadedComments, comments } = this.state;
    return (
      <>
        <h2>{article.title}</h2>
        <p>{article.body}</p>
        <span className="article">
          <p>Author: {article.author}</p>
          <p>Time: {article.created_at}</p>
          <p>Comments: {article.comment_count}</p>
          <Vote votes={article.votes} article_id={article.article_id} />
          <Delete article_id={article.article_id} />
        </span>
        <PostComment
          user_id={user.user_id}
          getNewComment={this.getNewComment}
          article_id={article.article_id}
        />
        {comments.length === 0 && <p>Be the first to comment!</p>}
        {loadedComments ? (
          <CommentsCard
            user={user}
            comments={comments}
            article_id={article.article_id}
          />
        ) : (
          <p>Loading Comments...</p>
        )}
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

export default Article;
