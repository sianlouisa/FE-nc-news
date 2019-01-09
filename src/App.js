import React, { Component } from 'react';
import './App.css';
import { Router } from '@reach/router';
import Header from './components/Header';
import NavBar from './components/Nav';
import Content from './components/Content';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Login from './components/Login';
import Search from './components/Search';
import Date from './components/Date';
import Auth from './components/Auth';
import Users from './components/Users';
import * as api from './api';
import PostTopic from './components/PostTopic';
import PostArticle from './components/PostArticle';

class App extends Component {
  state = { user: {}, topics: [] };

  render() {
    const { user, topics } = this.state;
    return (
      <div className="App">
        <Auth handleSubmit={this.handleSubmit} user={user}>
          <Header />
          <Login />
          <Search />
          <NavBar />
          <Router className="content">
            <Content path="/" />
            <Content path="/topics/:topic/articles" />
            <Content path="/articles/:id" />
            <Users path="/users" />
            <Users path="/users/:id" />
            <PostTopic path="/post/topic" />
            <PostArticle path="/post/article" user={user} topics={topics} />
          </Router>
          <Sidebar />
          <Footer />
          <Date />
        </Auth>
      </div>
    );
  }

  componentDidMount() {
    this.getUser();
    this.fetchTopics();
  }

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
    api.getUserById(user).then(user => {
      return this.setState({ user }, () => this.saveUser());
    });
  };
}

export default App;
