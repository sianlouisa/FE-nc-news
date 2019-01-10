import React, { Component } from 'react';
import '../components/css/Content.css';
import * as api from '../api';
import ArticlesList from './ArticlesList';
import ArticlesByTopicList from './ArticlesByTopicList';

class Content extends Component {
  state = {
    articles: [],
    isAllArticles: false,
  };
  render() {
    const { articles, isAllArticles } = this.state;
    return !isAllArticles ? (
      <ArticlesByTopicList
        handleLimitClick={this.handleLimitClick}
        handleSortClick={this.handleSortClick}
        topic={this.props.topic}
      />
    ) : (
      <ArticlesList
        articles={articles}
        handleLimitClick={this.handleLimitClick}
        handleSortClick={this.handleSortClick}
      />
    );
  }

  componentDidMount() {
    this.fetchAllArticles();
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
    api
      .getArticles()
      .then(articles => this.setState({ articles, isAllArticles: true }));
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
