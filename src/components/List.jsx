import React, { Component } from 'react';

class List extends Component {
  render() {
    const { articles } = this.props;
    return (
      <ul className="list">
        {articles.map(article => (
          <li id="article-item" key={article.article_id}>
            {article.title}
          </li>
        ))}
      </ul>
    );
  }
}

export default List;
