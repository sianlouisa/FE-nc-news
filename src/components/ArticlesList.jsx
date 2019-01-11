import React, { Component } from 'react';
import { Link } from '@reach/router';
import Options from './Options';
import Vote from './Vote';
import * as api from '../api';

class ArticlesList extends Component {
  state = {
    articles: [],
    sort_by: '',
    sort_ascending: '',
  };
  render() {
    const { handleClick } = this.props;
    const { articles } = this.state;
    return (
      <>
        <Options
          handleLimitClick={this.handleLimitClick}
          handleSortClick={this.handleSortClick}
          handleAscClick={this.handleAscClick}
          handleSubmit={this.handleSubmit}
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
    this.fetchAllArticles();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.topic !== this.props.topic) {
      this.fetchAllArticles();
    }
  }

  fetchAllArticles = () => {
    api
      .getArticles(this.props.topic)
      .then(articles => this.setState({ articles }));
  };

  handleLimitClick = event => {
    const limit = event.target.id;
    this.fetchUpdatedLimitArticles(limit);
  };

  handleSortClick = event => {
    const sort_by = event.target.value;
    this.setState({ sort_by });
  };

  handleAscClick = event => {
    const sort_ascending = event.target.value;
    this.setState({ sort_ascending });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { sort_by, sort_ascending } = this.state;
    this.fetchSortedArticles({ sort_by, sort_ascending });
  };

  fetchSortedArticles = sortBy => {
    const { topic } = this.props;
    api
      .articleSortBy(sortBy, topic)
      .then(sortedArticles => this.setState({ articles: sortedArticles }));
  };

  fetchUpdatedLimitArticles = limit => {
    const { topic } = this.props;
    api
      .articleLimits(limit, topic)
      .then(limitArticles => this.setState({ articles: limitArticles }));
  };
}

export default ArticlesList;
