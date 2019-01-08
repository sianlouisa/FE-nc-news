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

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Login />
        <Search />
        <NavBar />
        <Router className="content">
          <Content path="/home" />
          <Content path="/topics/:topic/articles" />
          <Content path="/articles/:id" />
        </Router>
        <Sidebar />
        <Footer />
        <Date />
      </div>
    );
  }
}

export default App;
