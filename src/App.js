import React, { Component } from 'react';
import './App.css';
import { Router } from '@reach/router';
import Header from './components/Header';
import NavBar from './components/Nav';
import Articles from './components/Articles';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Login from './components/Login';
import Search from './components/Search';
import Date from './components/Date';
import ArticlesByTopic from './components/ArticlesByTopic';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Login />
        <Search />
        <NavBar />
        <Router className="contents">
          <Articles path="/" />
          <ArticlesByTopic path="/topics/:topic/articles" />
        </Router>
        <Sidebar />
        <Footer />
        <Date />
      </div>
    );
  }
}

export default App;
