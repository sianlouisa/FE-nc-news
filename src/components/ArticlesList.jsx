import React, { Component } from 'react';
import { Link } from '@reach/router';
import Options from './Options';
import * as api from '../api';
import ArticleCard from './ArticleCard';

class ArticlesList extends Component {
  state = {
    articles: [],
    err: false,
  };

  render() {
    const { handleClick } = this.props;
    const { articles, err } = this.state;
    if (err) {
      return (
        <>
          <h2>No articles for this topic yet.</h2>
          <Link to="/post/article">Be the first to post an article!</Link>
        </>
      );
    } else {
      return (
        <>
          <Options fetchSortedArticles={this.fetchSortedArticles} />
          <ul className="article-list">
            {articles.map(article => (
              <li id="article-item" key={article.article_id}>
                <Link
                  to={`/articles/${article.article_id}`}
                  onClick={handleClick}
                  value={article.article_id}
                >
                  <h3>{article.title.toUpperCase()}</h3>
                </Link>
                <p>{article.body.slice(0, 150) + '...'}</p>
                <ArticleCard article={article} />
              </li>
            ))}
          </ul>
        </>
      );
    }
  }

  componentDidMount() {
    this.fetchAllArticles(undefined);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.topic !== this.props.topic) {
      this.fetchAllArticles(undefined);
    }
  }

  fetchAllArticles = () => {
    api
      .getArticles(undefined, this.props.topic)
      .then(articles => this.setState({ articles }))
      .catch(err => {
        this.setState({ err: true });
      });
  };

  fetchSortedArticles = (sort, topic) => {
    api
      .getArticles(sort, topic)
      .then(sortedArticles => this.setState({ articles: sortedArticles }))
      .catch(err => {
        this.setState({ err: true });
      });
  };
}

export default ArticlesList;
