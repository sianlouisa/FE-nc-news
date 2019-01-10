import React, { Component } from 'react';
import '../components/css/Content.css';
import * as api from '../api';
import List from './ArticlesList';
import Options from './Options';

class Content extends Component {
  state = {
    articles: [],
    articlesByTopic: [],
    isArticlesByTopic: false,
  };
  render() {
    const { articles, articlesByTopic, isArticlesByTopic } = this.state;

    if (isArticlesByTopic) {
      return (
        <>
          <Options
            handleLimitClick={this.handleLimitClick}
            handleSortClick={this.handleSortClick}
          />
          <List articles={articlesByTopic} />
        </>
      );
    }
    return (
      <>
        <Options
          handleLimitClick={this.handleLimitClick}
          handleSortClick={this.handleSortClick}
        />
        <List articles={articles} />
      </>
    );
  }

  componentDidMount() {
    this.fetchAllArticles();
  }

  componentDidUpdate(prevProps, prevState) {
    const { topic } = this.props;
    if (topic !== prevProps.topic && topic !== undefined) {
      this.fetchArticlesByTopic(topic);
      this.setState({ isArticlesByTopic: false });
    }
  }

  handleLimitClick = event => {
    const limit = event.target.id;
    this.fetchUpdatedLimitArticles(limit);
  };

  handleSortClick = event => {
    const sortBy = event.target.value;
    this.fetchSortedArticles(sortBy);
  };

  fetchAllArticles = () => {
    api.getArticles().then(articles => this.setState({ articles }));
  };

  fetchArticlesByTopic = topic => {
    api
      .getArticlesByTopic(topic)
      .then(articlesByTopic =>
        this.setState({ articlesByTopic, isArticlesByTopic: true }),
      );
  };

  fetchSortedArticles = sortBy => {
    api
      .articleSortBy(sortBy)
      .then(sortedArticles => this.setState({ articles: sortedArticles }));
  };

  fetchUpdatedLimitArticles = limit => {
    api
      .articleLimits(limit)
      .then(limitArticles => this.setState({ articles: limitArticles }));
  };
}

export default Content;
