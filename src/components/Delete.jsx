import React from 'react';
import * as api from '../api';

const Delete = props => {
  return (
    <>
      <button type="submit" onClick={handleDelete} value={props.articleId}>
        Delete
      </button>
    </>
  );
};

const handleDelete = event => {
  const articleIdToDelete = event.target.value;
  api
    .deleteItem(articleIdToDelete)
    .then(del => console.log(del))
    .catch(err => console.log(err));
};

export default Delete;
