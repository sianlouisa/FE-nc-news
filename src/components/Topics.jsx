import React, { Component } from 'react';
import '../App.css';
import { Link } from '@reach/router';
import Dropdown from 'muicss/lib/react/dropdown';
import DropdownItem from 'muicss/lib/react/dropdown-item';

class Topics extends Component {
  render() {
    const { topics } = this.props;
    return (
      <Dropdown label="Categories" alignMenu="right">
        {topics.map(topic => (
          <DropdownItem
            link={`/topics/${topic.slug}/articles`}
            key={topic.slug}
          >
            {topic.slug}
          </DropdownItem>
        ))}
      </Dropdown>
    );
  }
}

export default Topics;
