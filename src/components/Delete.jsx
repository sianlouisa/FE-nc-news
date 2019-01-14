import React from 'react';
import * as api from '../api';
import Button from 'muicss/lib/react/button';

const Delete = props => {
  return (
    <Button color="primary" onClick={handleDelete} value={props.article_id}>
      Delete
    </Button>
  );
};

const handleDelete = event => {
  const article_id = event.target.value;
  api.deleteItem(article_id);
};

export default Delete;
