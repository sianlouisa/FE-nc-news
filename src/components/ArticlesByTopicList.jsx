import React, { Component } from 'react';
import { Link } from '@reach/router';
import Options from './Options';
import * as api from '../api';

class ArticlesByTopicList extends Component {
  state = { articles: [] };
  render() {
    const { handleClick, handleLimitClick, handleSortClick } = this.props;
    const { articles } = this.state;

    return (
      <>
        <Options
          handleLimitClick={handleLimitClick}
          handleSortClick={handleSortClick}
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
              <p>Votes: {article.votes}</p>
            </li>
          ))}
        </ul>
      </>
    );
  }
  componentDidMount() {
    const { topic } = this.props;
    this.fetchArticlesByTopic(topic);
  }

  componentDidUpdate(prevProps) {
    const { topic } = this.props;
    if (prevProps.topic !== topic) this.fetchArticlesByTopic(topic);
  }

  fetchArticlesByTopic = topic => {
    api.getArticles(topic).then(articles => this.setState({ articles }));
  };
}

export default ArticlesByTopicList;
