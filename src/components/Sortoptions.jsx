import React from 'react';
import '../components/css/Content.css';

const Sortoptions = props => {
  const options = ['title', 'votes', 'author', 'created_at', 'comment_count'];
  return (
    <div className="sort">
      <div className="limit">
        <span>View</span>{' '}
        <span onClick={props.handleLimitClick} id="5">
          5
        </span>{' '}
        <span onClick={props.handleLimitClick} id="10">
          10
        </span>{' '}
        <span onClick={props.handleLimitClick} id="15">
          15
        </span>
      </div>
      <div className="sort-by">
        <span>Sort By</span>
        <select onChange={props.handleSortClick}>
          {options.map((option, i) => (
            <option value={option} key={i}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Sortoptions;
