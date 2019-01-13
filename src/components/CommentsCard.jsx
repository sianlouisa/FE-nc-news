import React from 'react';
import Vote from './Vote';

const CommentsCard = props => {
  const { comments, article_id } = props;

  return (
    <>
      <ul className="comments">
        {comments.map(comment => (
          <li id="comment-item" key={comment.comment_id}>
            {comment.author}
            <br />
            {comment.body}
            <br />
            {comment.created_at}
            <Vote
              comment_id={comment.comment_id}
              votes={comment.votes}
              article_id={article_id}
            />
          </li>
        ))}
      </ul>
    </>
  );
};

export default CommentsCard;
