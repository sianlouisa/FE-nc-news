import React, { Component } from 'react';
import * as api from '../api';

class ArticlesByTopic extends Component {
  state = {
    articles: [],
  };
  render() {
    const { articles } = this.state;
    return (
      <ul>
        {articles.map(article => (
          <li key={article.article_id}>{article.title} </li>
        ))}
      </ul>
    );
  }
  componentDidMount() {
    this.fetchArticlesByTopic(this.props.topic);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.topic !== prevProps)
      return this.fetchArticlesByTopic(this.props.topic);
    else return this.fetchArticlesByTopic(prevProps);
  }

  fetchArticlesByTopic = topic => {
    api.getArticlesByTopic(topic).then(articles => this.setState({ articles }));
  };
}

export default ArticlesByTopic;
