import React from 'react';
import * as api from '../api';
import { navigate } from '@reach/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Delete = props => {
  return (
    <button className="hide-button" onClick={() => handleDelete(props)}>
      <FontAwesomeIcon icon="trash" size="2x" />
    </button>
  );
};

const handleDelete = props => {
  const { article_id, comment_id } = props;
  if (comment_id === undefined) {
    api
      .deleteItem({ article_id, comment_id })
      .then(() =>
        navigate('/', { replace: true, state: { message: 'article deleted' } }),
      );
  } else {
    api.deleteItem({ article_id, comment_id }).then(() =>
      navigate(`/articles/${article_id}`, {
        replace: true,
        state: { message: 'comment deleted' },
      }),
    );
  }
};

export default Delete;
