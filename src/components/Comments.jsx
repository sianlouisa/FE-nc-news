import React from 'react';

const Comments = props => {
  const comments = props.comments;
  return (
    <ul>
      {comments.map(comment => (
        <li key={comment.comment_id}>
          {comment.author}
          <br />
          {comment.body}
        </li>
      ))}
    </ul>
  );
};

export default Comments;
