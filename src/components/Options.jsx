import React from 'react';
import '../components/css/Content.css';
import Sortoptions from './Sortoptions';
import PostOptions from './PostOptions';

const Options = props => {
  return (
    <div className="options">
      <PostOptions />
      <Sortoptions
        handleLimitClick={props.handleLimitClick}
        handleSortClick={props.handleSortClick}
        handleAscClick={props.handleAscClick}
        handleSubmit={props.handleSubmit}
        handleBackPage={props.handleBackPage}
        handleNextPage={props.handleNextPage}
      />
    </div>
  );
};

export default Options;
