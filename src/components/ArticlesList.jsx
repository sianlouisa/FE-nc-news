import React, { Component } from 'react';
import { Link } from '@reach/router';
import ReactLoading from 'react-loading';
import Options from './Options';
import * as api from '../api';
import ArticleCard from './ArticleCard';

class ArticlesList extends Component {
  state = {
    articles: [],
    err: false,
    noPage: false,
    page: 1,
    limit: 5,
  };

  render() {
    const { handleClick } = this.props;
    const {
      articles, err, page, limit, noPage,
    } = this.state;

    if (err) {
      return (
        <>
          <h2>No articles for this topic yet.</h2>
          <Link to="/post/article">Be the first to post an article!</Link>
        </>
      );
    }

    if (noPage) {
      return <h2>You'/ve reached the end of the articles! Try browsing a different topic.</h2>;
    }

    if (articles.length <= 0) {
      return (
        <ReactLoading
          type="spinningBubbles"
          color="#3084f8"
          height={500}
          width={500}
          className="loading"
        />
      );
    }
    return (
      <div>
        <Options fetchSortedArticles={this.fetchSortedArticles} page={page} limit={limit} />
        <ul className="article-list">
          {articles.map(article => (
            <li id="article-item" key={article.article_id}>
              <Link
                to={`/articles/${article.article_id}`}
                onClick={handleClick}
                value={article.article_id}
              >
                <h3>{article.title.toUpperCase()}</h3>
              </Link>
              <p>{`${article.body.slice(0, 150)}...`}</p>
              <ArticleCard article={article} />
            </li>
          ))}
        </ul>
      </div>
    );
  }

  componentDidMount() {
    this.fetchAllArticles();
    window.addEventListener('scroll', this.handleScroll, true);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll, true);
  }

  componentDidUpdate(prevProps) {
    const { topic } = this.props;
    if (prevProps.topic !== topic) {
      this.fetchAllArticles();
    }
  }

  loadMoreFromScroll = () => {
    this.setState(
      prevState => ({
        page: prevState.page + 1,
      }),
      () => {
        this.fetchUpdatedArticles();
      },
    );
  };

  handleScroll = (e) => {
    const element = e.target;
    if (element.scrollHeight - element.scrollTop === element.clientHeight) {
      this.loadMoreFromScroll();
    }
  };

  fetchUpdatedArticles = () => {
    const { topic } = this.props;
    const { page, limit, articles } = this.state;
    api
      .getArticles(undefined, topic, page, limit)
      .then(updatedArticles => this.setState({
        articles: [...articles, ...updatedArticles],
      }))
      .catch(() => this.setState({ err: true }));
  };

  fetchAllArticles = () => {
    const { topic } = this.props;
    const { page, limit } = this.state;
    api
      .getArticles(undefined, topic, page, limit)
      .then(articles => this.setState({ articles }))
      .catch(() => this.setState({ err: true }));
  };

  fetchSortedArticles = (sort, topic, page, limit) => {
    const { articles } = this.state;
    api
      .getArticles(sort, topic, page, limit)
      .then(updatedArticles => this.setState({
        articles: [...articles, ...updatedArticles],
      }))
      .catch(() => this.setState({ noPage: true }));
  };
}

export default ArticlesList;
