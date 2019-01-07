import React, { Component } from 'react';
import * as api from '../api';

class Articles extends Component {
  state = {
    articles: [],
  };
  render() {
    const { articles } = this.state;
    return (
      <ul className="list">
        {articles.map(article => (
          <>
            <li id="article-item" key={article.article_id}>
              {article.title.toUpperCase()}
              <br />
              {article.body}
            </li>
            <br />
          </>
        ))}
      </ul>
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
