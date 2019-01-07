import React, { Component } from 'react';
import { Link } from '@reach/router';

class NavBar extends Component {
  state = {
    topics: [
      {
        description: 'The man, the Mitch, the legend',
        slug: 'mitch',
      },
      {
        description: 'Not dogs',
        slug: 'cats',
      },
    ],
  };
  render() {
    const { topics } = this.state;
    return (
      <div className="nav">
        <nav>
          {topics.map(topic => (
            <span key={topic.slug}>
              <Link to={`/topics/${topic.slug}/articles`}>{topic.slug}</Link>
            </span>
          ))}
        </nav>
      </div>
    );
  }
}

export default NavBar;
