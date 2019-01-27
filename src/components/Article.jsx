import React, { Component } from 'react';
import * as api from '../api';
import CommentsCard from './CommentsCard';
import PostComment from './PostComment';
import Delete from './Delete';
import Vote from './Vote';
import Errors from './Errors';
import ArticleCard from './ArticleCard';
import ReactLoading from 'react-loading';

class Article extends Component {
  state = {
    article: [],
    comments: [],
    loadedComments: false,
    articleErr: null,
    commentErr: null,
  };
  render() {
    const { user } = this.props;
    const {
      article,
      loadedComments,
      comments,
      articleErr,
      commentErr,
    } = this.state;
    if (articleErr) return <Errors />;
    return (
      <>
        <div className="article">
          <div className="article-body">
            <h2>{article.title}</h2>
            <div className="vote-body">
              <Vote votes={article.votes} article_id={article.article_id} />
              {article.body}
              {article.author === user.username && (
                <Delete article_id={article.article_id} />
              )}
            </div>
          </div>
        </div>
        <ArticleCard article={article} />
        <PostComment
          user_id={user.user_id}
          getNewComment={this.getNewComment}
          article_id={article.article_id}
        />
        {loadedComments ? (
          <CommentsCard
            user={user}
            comments={comments}
            article_id={article.article_id}
          />
        ) : commentErr ? (
          <p>Be the first to comment</p>
        ) : (
          <ReactLoading
            type="spinningBubbles"
            color="#3084f8"
            height={500}
            width={500}
            className="loading"
          />
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
      .catch(err => this.setState({ articleErr: err }));
  };

  fetchComments = id => {
    api
      .getArticleComments(id)
      .then(comments => this.setState({ comments, loadedComments: true }))
      .catch(err => this.setState({ commentErr: err }));
  };

  getNewComment = comment => {
    this.setState({
      comments: [comment, ...this.state.comments],
    });
  };
}

export default Article;
