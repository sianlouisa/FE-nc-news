import React, { Component } from 'react';
import '../App.css';
import * as api from '../api';
import Form from 'muicss/lib/react/form';
import Input from 'muicss/lib/react/input';
import Textarea from 'muicss/lib/react/textarea';
import Button from 'muicss/lib/react/button';
import Option from 'muicss/lib/react/option';
import Select from 'muicss/lib/react/select';

class PostArticle extends Component {
  state = {
    title: '',
    body: '',
    topic: '',
    sent: false,
  };
  render() {
    const { topics } = this.props;
    return (
      <Form onSubmit={this.handleSubmit}>
        <legend>Post Article</legend>
        <Input placeholder="Title" onChange={this.handleTitleChange} />
        <Textarea placeholder="Body" onChange={this.handleBodyChange} />
        <Select defaultValue="Choose Topic" onChange={this.handleTopic}>
          <Option value="Choose Topic" label="Choose Topic" />
          {topics.map(topic => (
            <Option value={topic.slug} key={topic.slug} label={topic.slug} />
          ))}
        </Select>
        <Button variant="raised">Submit</Button>
      </Form>
    );
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
    const { title, body, topic } = this.state;
    const user_id = this.props.user.user_id;
    event.preventDefault();
    api
      .postArticle({ title, body, topic, user_id })
      .then(article => this.props.navigate(`/articles/${article.article_id}`));
  };
}

export default PostArticle;
