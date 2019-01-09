import React from 'react';
import '../components/css/Comments.css';

const Comments = props => {
  const comments = props.comments;
  return (
    <ul className="comments">
      {comments.map(comment => (
        <li id="comment-item" key={comment.comment_id}>
          {comment.author}
          <br />
          {comment.body}
        </li>
      ))}
    </ul>
  );
};

export default Comments;
