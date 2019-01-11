import React from 'react';
import { Link } from '@reach/router';

const PostOptions = () => {
  return (
    <div className="post-options">
      <Link to="/post/topic">Post Topic</Link>
      {' | '}
      <Link to="/post/article">Post Article</Link>
    </div>
  );
};

export default PostOptions;
