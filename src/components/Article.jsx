import React, { Component } from 'react';
// import * as api from '../api';

class Article extends Component {
  state = { article: [] };

  render() {
    console.log('hello');
    return <div>single article</div>;
  }

  // componentDidMount() {
  //   this.fetchArticleById(this.props.id);
  // }

  // fetchArticleById = id => {
  //   api.getArticleById(id).then(article => this.setState({ article }));
  // };
}

export default Article;
