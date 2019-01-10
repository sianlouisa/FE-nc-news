import React, { Component } from 'react';
import { Link } from '@reach/router';
import Options from './Options';
import Vote from './Vote';
import * as api from '../api';

class ArticlesByTopicList extends Component {
  state = { articles: [], noArticles: true };
  render() {
    const { handleClick, handleLimitClick, handleSortClick } = this.props;
    const { articles, noArticles } = this.state;
    return !noArticles ? (
      <>
        <p>No articles for this topic yet!</p>
        <Link to="/post/article">
          <p>Click to post first article</p>
        </Link>
      </>
    ) : (
      <>
        <Options
          handleLimitClick={handleLimitClick}
          handleSortClick={handleSortClick}
        />
        <ul className="list">
          {articles.map(article => (
            <li id="article-item" key={article.article_id}>
              <Link
                to={`/articles/${article.article_id}`}
                onClick={handleClick}
                value={article.article_id}
              >
                {article.title.toUpperCase()}
              </Link>
              <p>{article.body}</p>
              <p>Author: {article.author}</p>
              <p>Time: {article.created_at}</p>
              <p>Comments: {article.comment_count}</p>
              <Vote article_id={article.article_id} votes={article.votes} />
            </li>
          ))}
        </ul>
      </>
    );
  }
  componentDidMount() {
    const { topic } = this.props;
    this.fetchArticlesByTopic(topic);
  }

  componentDidUpdate(prevProps, prevState) {
    const { topic } = this.props;
    if (prevProps.topic !== topic)
      this.fetchArticlesByTopic(topic).catch(err =>
        this.setState({ noArticles: false }),
      );
  }

  fetchArticlesByTopic = topic => {
    return api
      .getArticles(topic)
      .then(articles => this.setState({ articles, noArticles: true }));
  };
}

export default ArticlesByTopicList;
