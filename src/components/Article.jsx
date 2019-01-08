import React, { Component } from 'react';

class Article extends Component {
  state = { article: [] };

  render() {
    const { article } = this.props;
    console.log('hello');
    return <div>{article.title}</div>;
  }
}

export default Article;
