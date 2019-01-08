import React, { Component } from 'react';
import '../components/css/Content.css';
import * as api from '../api';
import List from './List';

class Content extends Component {
  state = {
    articles: [],
    articlesByTopic: [],
    isArticlesByTopic: false,
  };
  render() {
    const { articles, articlesByTopic, isArticlesByTopic } = this.state;
    if (isArticlesByTopic) {
      return <List articles={articlesByTopic} />;
    } else return <List articles={articles} />;
  }

  componentDidMount() {
    this.fetchAllArticles();
  }

  componentDidUpdate(prevProps) {
    if (this.props.topic !== prevProps.topic) {
      if (this.props.topic === undefined) {
        this.setState({ isArticlesByTopic: false });
      } else {
        this.fetchArticlesByTopic(this.props.topic);
        this.setState({ isArticlesByTopic: true });
      }
    }
  }

  fetchAllArticles = () => {
    api.getArticles().then(articles => this.setState({ articles }));
  };

  fetchArticlesByTopic = topic => {
    api
      .getArticlesByTopic(topic)
      .then(articlesByTopic => this.setState({ articlesByTopic }));
  };
}

export default Content;
