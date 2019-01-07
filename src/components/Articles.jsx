import React, { Component } from 'react';
import * as api from '../api';

class Articles extends Component {
  state = {
    articles: [],
  };
  render() {
    const { articles } = this.state;
    return (
      <div>
        <ul>
          {articles.map(article => (
            <li key={article.article_id}>{article.title}</li>
          ))}
        </ul>
      </div>
    );
  }

  componentDidMount() {
    this.fetchAllArticles();
  }

  fetchAllArticles = () => {
    api.getArticles().then(articles => this.setState({ articles }));
  };
}

export default Articles;
