import React, { Component } from 'react';
import '../components/css/Content.css';
import * as api from '../api';
import List from './ArticlesList';
import Options from './Options';
import Article from './Article';

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
      return (
        <>
          <Options
            handleLimitClick={this.handleLimitClick}
            handleSortClick={this.handleSortClick}
          />
          <List articles={articlesByTopic} />
        </>
      );
    } else if (isSingleArticle) {
      return <Article article={singleArticle} user={this.props.user} />;
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

  componentDidUpdate(prevProps) {
    const { id, topic } = this.props;
    if (topic !== prevProps.topic) {
      if (topic !== undefined) this.fetchArticlesByTopic(topic);
      this.setState({ isArticlesByTopic: false });
    }
    if (id !== prevProps.id) {
      if (id !== undefined) this.fetchArticleById(id);
      this.setState({ isSingleArticle: false });
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

  fetchArticleById = article => {
    api
      .getArticleById(article)
      .then(singleArticle =>
        this.setState({ singleArticle, isSingleArticle: true }),
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
