import React from 'react';
import '../components/css/Content.css';
import Sortoptions from './Sortoptions';
import { Link } from '@reach/router';

const Options = props => {
  return (
    <div className="sort">
      <Link to="/post/topic">Post Topic</Link>
      {' | '}
      <Link to="/post/article">Post Article</Link>
      <Sortoptions
        handleLimitClick={props.handleLimitClick}
        handleSortClick={props.handleSortClick}
      />
    </div>
  );
};

export default Options;
