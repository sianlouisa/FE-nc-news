import React, { Component } from 'react';
import { Link } from '@reach/router';
import Options from './Options';
import * as api from '../api';
import ArticleCard from './ArticleCard';
import ReactLoading from 'react-loading';

class ArticlesList extends Component {
  state = {
    articles: [],
    err: false,
    noPage: false,
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
          {articles.length === 0 ? (
            <ReactLoading
              type="spinningBubbles"
              color="#3084f8"
              height={500}
              width={500}
              className="loading"
            />
          ) : (
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
          )}
        </>
      );
    }
  }

  componentDidMount() {
    this.fetchAllArticles(undefined);
  }

  componentDidUpdate(prevProps) {
    const { topic } = this.props;
    if (prevProps.topic !== topic) {
      this.fetchAllArticles(undefined);
    }
  }

  fetchAllArticles = () => {
    const { topic } = this.props;
    api
      .getArticles(undefined, topic)
      .then(articles => this.setState({ articles }))
      .catch(() => {
        this.setState({ err: true });
      });
  };

  fetchSortedArticles = (sort, topic) => {
    api
      .getArticles(sort, topic)
      .then(articles => this.setState({ articles }))
      .catch(() => {
        this.setState({ noPage: true });
      });
  };
}

export default ArticlesList;
