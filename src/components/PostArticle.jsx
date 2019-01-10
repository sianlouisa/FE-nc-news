import React, { Component } from 'react';
import '../components/css/PostArticle.css';
import * as api from '../api';

class PostArticle extends Component {
  state = {
    title: '',
    body: '',
    topic: '',
    uesr_id: '',
  };
  render() {
    const { topics } = this.props;
    return (
      <form className="article-form" onSubmit={this.handleSubmit}>
        <label htmlFor="newArticle" />
        Title:{' '}
        <input
          id="newArticle"
          className="article-title"
          onChange={this.handleTitleChange}
        />
        Body:{' '}
        <input
          id="newArtile"
          className="article-body"
          onChange={this.handleBodyChange}
        />
        <select className="select-topic" onClick={this.handleTopic}>
          <option>Select Topic</option>
          {topics.map(topic => (
            <option value={topic.slug} key={topic.slug}>
              {topic.slug}
            </option>
          ))}
        </select>
        <button type="submit">Submit</button>
      </form>
    );
  }

  componentDidMount() {
    const user_id = this.props.user.user_id;
    this.setState({ user_id });
  }

  handleTitleChange = event => {
    const title = event.target.value;
    this.setState({ title });
  };

  handleBodyChange = event => {
    const body = event.target.value;
    this.setState({ body });
  };

  handleTopic = event => {
    const topic = event.target.value;
    this.setState({ topic });
  };

  handleSubmit = event => {
    event.preventDefault();
    api
      .postArticle(this.state)
      .then(article => this.props.navigate(`/articles/${article.article_id}`));
  };
}

export default PostArticle;
