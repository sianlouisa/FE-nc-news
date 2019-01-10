import React from 'react';
// import * as api from '../api';

const Modify = props => {
  return (
    <button type="submit" onClick={handleEdit} value={props.articleId}>
      Edit
    </button>
  );
};

const handleEdit = event => {
  // const articleIdToEdit = event.target.value;
};

export default Modify;
