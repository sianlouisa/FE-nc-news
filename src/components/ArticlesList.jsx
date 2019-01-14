import React, { Component } from 'react';
import { Link } from '@reach/router';
import Options from './Options';
import Vote from './Vote';
import * as api from '../api';
import ArticleCard from './ArticleCard';
import Errors from './Errors';

class ArticlesList extends Component {
  state = {
    articles: [],
    err: null,
  };
  render() {
    const { handleClick } = this.props;
    const { articles, err } = this.state;
    if (err) return <Errors />;
    return (
      <>
        <Options fetchSortedArticles={this.fetchSortedArticles} />
        <ul className="article-list">
          {articles.map(article => (
            <li id="article-item" key={article.article_id}>
              <div className="title">
                <Link
                  to={`/articles/${article.article_id}`}
                  onClick={handleClick}
                  value={article.article_id}
                >
                  <h3>{article.title.toUpperCase()}</h3>
                </Link>
                <p>{article.body.slice(0, 150) + '...'}</p>
              </div>
              <Vote article_id={article.article_id} votes={article.votes} />
              <ArticleCard article={article} />
            </li>
          ))}
        </ul>
      </>
    );
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
      .catch(err => this.setState({ err }));
  };

  fetchSortedArticles = (sort, topic) => {
    api
      .getArticles(sort, topic)
      .then(sortedArticles => this.setState({ articles: sortedArticles }))
      .catch(err => this.setState({ err }));
  };
}

export default ArticlesList;
