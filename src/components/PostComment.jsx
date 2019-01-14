import React, { Component } from 'react';
import '../App.css';
import * as api from '../api';
import Form from 'muicss/lib/react/form';
import Textarea from 'muicss/lib/react/textarea';
import Button from 'muicss/lib/react/button';

class PostComment extends Component {
  state = {
    body: '',
    error: false,
    sent: false,
  };
  render() {
    const { error, sent, body } = this.state;
    return (
      <>
        {error && <h2>Please fill out all fields</h2>}
        {sent && <h2>Successfully commented!</h2>}
        <Form onSubmit={this.handleSubmit}>
          <legend>Post Comment</legend>
          <Textarea
            placeholder="Comment"
            onChange={this.handleChange}
            value={body}
          />
          <Button variant="raised">Submit</Button>
        </Form>
      </>
    );
  }

  handleChange = event => {
    const body = event.target.value;
    this.setState({ body });
  };

  handleSubmit = event => {
    const { article_id, user_id } = this.props;
    console.log(this.props);
    const { body } = this.state;
    event.preventDefault();
    if (this.state.body.length === 0) {
      this.setState({ error: true });
    } else {
      api.postCommentOnArticle({ body, article_id, user_id }).then(comment => {
        this.props.getNewComment(comment);
        this.setState({ body: '', sent: true, error: false });
      });
    }
  };
}
export default PostComment;
