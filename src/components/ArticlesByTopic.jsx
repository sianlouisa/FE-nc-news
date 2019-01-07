import React, { Component } from 'react';
import * as api from '../api';

class ArticlesByTopic extends Component {
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
