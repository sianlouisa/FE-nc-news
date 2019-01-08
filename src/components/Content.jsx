import React, { Component } from 'react';
import '../components/css/Content.css';
import * as api from '../api';
import List from './List';

class Content extends Component {
  state = {
    articles: [],
    articlesByTopic: [],
    singleArticle: [],
    isArticlesByTopic: false,
    isSingleArticle: false,
  };
  render() {
    const {
      articles,
      articlesByTopic,
      singleArticle,
      isArticlesByTopic,
      isSingleArticle,
    } = this.state;

    if (isArticlesByTopic) {
      return <List articles={articlesByTopic} />;
    } else if (isSingleArticle) {
      return <List articles={singleArticle} />;
    }
    return <List articles={articles} />;
  }

  componentDidMount() {
    this.fetchAllArticles();
  }

  componentDidUpdate(prevProps) {
    const { id, topic } = this.props;
    if (topic !== prevProps.topic) {
      if (topic !== undefined) this.fetchArticlesByTopic(topic);
    }
    if (id !== prevProps.id) {
      if (id !== undefined) this.fetchArticleById(id);
    }
  }

  fetchAllArticles = () => {
    api.getArticles().then(articles => this.setState({ articles }));
  };

  fetchArticlesByTopic = topic => {
    api
      .getArticlesByTopic(topic)
      .then(articlesByTopic =>
        this.setState({ articlesByTopic, isArticleByTopic: true }),
      );
  };

  fetchArticleById = article => {
    api
      .getArticleById(article)
      .then(singleArticle =>
        this.setState({ singleArticle, isSingleArticle: true }),
      );
  };
}

export default Content;
