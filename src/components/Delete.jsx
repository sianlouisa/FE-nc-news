import React from 'react';
import * as api from '../api';

const Delete = props => {
  return (
    <button type="submit" onClick={handleDelete} value={props.articleId}>
      Delete
    </button>
  );
};

const handleDelete = event => {
  const articleIdToDelete = event.target.value;
  api.deleteItem(articleIdToDelete);
};

export default Delete;
