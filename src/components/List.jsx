import React, { Component } from 'react';
import { Link } from '@reach/router';
import Article from './Article';

class List extends Component {
  render() {
    const { articles, handleClick } = this.props;
    return Array.isArray(articles) ? (
      <>
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
              <p>Votes: {article.votes}</p>
            </li>
          ))}
        </ul>
      </>
    ) : (
      <Article article={articles} />
    );
  }
}

export default List;
