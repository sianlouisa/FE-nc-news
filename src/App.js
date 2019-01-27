import React, { Component } from 'react';
import './App.css';
import * as api from './api';
import { Router } from '@reach/router';
import Header from './components/Header';
import NavBar from './components/NavBar';
import Auth from './components/Auth';
import Users from './components/Users';
import PostTopic from './components/PostTopic';
import PostArticle from './components/PostArticle';
import Article from './components/Article';
import ArticlesList from './components/ArticlesList';
import User from './components/User';
import Errors from './components/Errors';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faArrowUp,
  faArrowDown,
  faTrash,
} from '@fortawesome/free-solid-svg-icons';
library.add(faArrowUp, faArrowDown, faTrash);

class App extends Component {
  state = { user: {}, topics: [] };

  render() {
    const { user, topics } = this.state;
    return (
      <div className="App">
        <Auth handleSubmit={this.handleSubmit} user={user}>
          <Header user={user} logout={this.logout} />
          <Router className="content">
            <ArticlesList path="/" />
            <ArticlesList path="/topics/:topic/articles" />
            <Errors path="/error" />
            <Article path="/articles/:id" user={user} />
            <Users path="/users" />
            <User path="/users/:username" />
            <PostTopic path="/post/topic" />
            <PostArticle path="/post/article" user={user} topics={topics} />
            <Errors default />
          </Router>
          <NavBar topics={topics} />
        </Auth>
      </div>
    );
  }

  componentDidMount() {
    this.getUser();
    this.fetchTopics();
  }

  logout = () => {
    localStorage.clear();
    this.setState({ user: null });
  };

  fetchTopics = () => {
    api.getTopics().then(topics => this.setState({ topics }));
  };

  saveUser = () => {
    const user = this.state.user;
    localStorage.setItem('user', JSON.stringify(user));
  };

  getUser = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    this.setState({ user });
  };

  handleSubmit = event => {
    event.preventDefault();
    const user = event.target.username.value;
    api.getUsers(user).then(user => {
      return this.setState({ user }, () => this.saveUser());
    });
  };
}

export default App;
