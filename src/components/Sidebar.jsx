import React, { Component } from 'react';
import '../components/css/Sidebar.css';
import * as api from '../api';
import { Link } from '@reach/router';

class Sidebar extends Component {
  state = { articles: [] };
  render() {
    const { articles } = this.state;
    return (
      <>
        <div className="sidebar">
          <h2>What's Hot</h2>
          <ul className="hot-articles">
            {articles.map(article => (
              <li id="hot-article-item" key={article.article_id}>
                <Link to={`/articles/${article.article_id}`}>
                  {article.title}
                </Link>
                <br />
                Comments: {article.comment_count}
              </li>
            ))}
          </ul>
        </div>
      </>
    );
  }

  componentDidMount() {
    this.fetchMostPopularArticles();
  }

  fetchMostPopularArticles = () => {
    api.getArticlesMostComments().then(articles => this.setState({ articles }));
  };
}

export default Sidebar;
