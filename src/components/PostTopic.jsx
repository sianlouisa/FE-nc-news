import React, { Component } from 'react';
import '../App.css';
import * as api from '../api';
import Form from 'muicss/lib/react/form';
import Input from 'muicss/lib/react/input';
import Textarea from 'muicss/lib/react/textarea';
import Button from 'muicss/lib/react/button';

class PostTopic extends Component {
  state = {
    sent: false,
    slug: '',
    description: '',
    error: false,
  };
  render() {
    const { sent, slug, description, error } = this.state;
    return (
      <>
        <Form onSubmit={this.handleSubmit} className="post-topic">
          <h2>Post a new topic for discussion</h2>
          <Input
            placeholder="Topic"
            onChange={this.handleSlugChange}
            value={slug}
          />
          <Textarea
            placeholder="Description"
            onChange={this.handleDescriptionChange}
            value={description}
          />
          <Button variant="raised">Submit</Button>
        </Form>
        {error && <h2>Please fill out all fields</h2>}
        {sent && <h2>Successfully Posted</h2>}
      </>
    );
  }
  handleSlugChange = event => {
    const slug = event.target.value;
    this.setState({ slug });
  };

  handleDescriptionChange = event => {
    const description = event.target.value;
    this.setState({ description });
  };

  handleSubmit = event => {
    const { slug, description } = this.state;
    event.preventDefault();
    const topic = {
      slug,
      description,
    };
    const topicArray = Object.values(topic);
    topicArray.some(input => input.length < 1)
      ? this.setState({ error: true })
      : api.postTopic(this.state).then(topic =>
          this.setState({
            sent: true,
            slug: '',
            description: '',
            error: false,
          }),
        );
  };
}

export default PostTopic;
