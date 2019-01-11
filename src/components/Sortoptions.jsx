import React from 'react';

const Sortoptions = props => {
  const options = ['title', 'votes', 'author', 'created_at', 'comment_count'];
  return (
    <div className="sort">
      <div id="sort-option">
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
      <div id="sort-option">
        <form onSubmit={props.handleSubmit}>
          <span>Sort By</span>
          <select onClick={props.handleSortClick}>
            handleLimitClick
            {options.map((option, i) => (
              <option value={option} key={i}>
                {option}
              </option>
            ))}
          </select>
          Least
          <input
            type="radio"
            name="sort_asc"
            value="true"
            onClick={props.handleAscClick}
          />
          Most
          <input
            type="radio"
            name="sort_asc"
            value="false"
            onClick={props.handleAscClick}
          />
          <button type="submit">Submit</button>
        </form>
        <button onClick={() => props.handleBackPage(-1)} value="-1">
          Back
        </button>
        <button onClick={() => props.handleNextPage(1)} value="1">
          Next
        </button>
      </div>
    </div>
  );
};

export default Sortoptions;
