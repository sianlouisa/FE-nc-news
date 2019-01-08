import React, { Component } from 'react';
import '../components/css/Nav.css';
import { Link } from '@reach/router';
import * as api from '../api';

class NavBar extends Component {
  state = {
    topics: [],
  };
  render() {
    const { topics } = this.state;
    return (
      <nav className="nav">
        {topics.map(topic => (
          <span key={topic.slug}>
            <Link to={`/topics/${topic.slug}/articles`}>{topic.slug}</Link>
          </span>
        ))}
      </nav>
    );
  }

  componentDidMount() {
    this.fetchTopics();
  }

  fetchTopics = () => {
    api.getTopics().then(topics => this.setState({ topics }));
  };
}

export default NavBar;
