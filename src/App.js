import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Content from './components/Content';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import { Router } from '@reach/router';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Nav />
        <Content />
        <Sidebar />
        <Footer />
      </div>
    );
  }
}

export default App;
