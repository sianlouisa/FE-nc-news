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
// import Auth from './components/Auth';
import Users from './components/Users';
import * as api from './api';
import PostTopic from './components/PostTopic';

class App extends Component {
  state = { user: {} };
  render() {
    return (
      <div className="App">
        {/* <Auth handleSubmit={this.handleSubmit} user={user}> */}
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
        </Router>
        <Sidebar />
        <Footer />
        <Date />
        {/* </Auth> */}
      </div>
    );
  }
  handleSubmit = event => {
    event.preventDefault();
    const user = event.target.username.value;
    api.getUserById(user).then(user => this.setState({ user }));
  };
}

export default App;
