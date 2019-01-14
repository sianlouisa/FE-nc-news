import React, { Component } from 'react';
import * as api from '../api';
import Moment from 'react-moment';
import { Link } from '@reach/router';
import CommentsCard from './CommentsCard';
import PostComment from './PostComment';
import Delete from './Delete';
import Vote from './Vote';
import Errors from './Errors';

class Article extends Component {
  state = { article: [], comments: [], loadedComments: false, err: null };
  render() {
    const { user } = this.props;
    const { message } = this.props.location.state;
    const { article, loadedComments, comments, err } = this.state;
    if (err) return <Errors />;
    return (
      <>
        {message === 'comment deleted' && <h2>Comment deleted</h2>}
        <h2>{article.title}</h2>
        <p>{article.body}</p>
        <span className="article">
          <p>
            Author:{' '}
            <Link to={`/users/${article.author}`}>{article.author}</Link>
          </p>
          <p>
            <Moment>{article.created_at}</Moment>
          </p>
          <p>Comments: {article.comment_count}</p>
          <Vote votes={article.votes} article_id={article.article_id} />
          {article.author === user.username && (
            <Delete article_id={article.article_id} />
          )}
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
    api
      .getArticleById(article_id)
      .then(article => this.setState({ article }))
      .catch(err => this.setState({ err }));
  };

  fetchComments = id => {
    api
      .getArticleComments(id)
      .then(comments => this.setState({ comments, loadedComments: true }))
      .catch(err => this.setState({ err }));
  };

  getNewComment = comment => {
    this.setState({
      comments: [...this.state.comments, comment],
    });
  };
}

export default Article;
