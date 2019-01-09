import React, { Component } from 'react';
import '../components/css/PostTopic.css';
import * as api from '../api';

class PostTopic extends Component {
  state = {
    slug: '',
    description: '',
  };
  render() {
    return (
      <form className="topic-form" onSubmit={this.handleSubmit}>
        <label htmlFor="newTopic" />
        Topic Name:
        <input
          id="newTopic"
          className="topic-name"
          onChange={this.handleSlugChange}
        />
        Decription:
        <input
          id="newTopic"
          className="topic-description"
          onChange={this.handleDescriptionChange}
        />
        <button type="submit">Submit</button>
      </form>
    );
  }
  handleSlugChange = event => {
    const slug = event.target.value;
    this.setState(state => ({
      slug,
    }));
  };

  handleDescriptionChange = event => {
    const description = event.target.value;
    this.setState(state => ({
      description,
    }));
  };

  handleSubmit = event => {
    event.preventDefault();
    api.postTopic(this.state);
  };
}

export default PostTopic;
