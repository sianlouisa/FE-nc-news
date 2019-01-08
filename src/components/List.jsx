import React, { Component } from 'react';
import { Link } from '@reach/router';
import Article from './Article';

class List extends Component {
  render() {
    const { articles, handleClick } = this.props;
    return (
      <ul className="list">
        {Array.isArray(articles) ? (
          articles.map(article => (
            <li id="article-item" key={article.article_id}>
              <Link
                to={`/articles/${article.article_id}`}
                onClick={handleClick}
                value={article.article_id}
              >
                {article.title.toUpperCase()}
              </Link>
              <br /> {article.body}
            </li>
          ))
        ) : (
          <Article article={articles} />
        )}
      </ul>
    );
  }
}

export default List;
