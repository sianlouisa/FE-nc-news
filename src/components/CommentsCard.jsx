import React from 'react';
import Vote from './Vote';
import Delete from './Delete';
import Moment from 'react-moment';

const CommentsCard = props => {
  const { comments, article_id, user } = props;
  return (
    <>
      <ul className="comments">
        {comments.map(comment => (
          <li id="comment-item" key={comment.comment_id}>
            <p>{comment.body}</p>

            {comment.author}
            <br />
            <Moment fromNow>{comment.created_at}</Moment>
            <Vote
              comment_id={comment.comment_id}
              votes={comment.votes}
              article_id={article_id}
            />
            {comment.author === user.username ? (
              <Delete comment_id={comment.comment_id} article_id={article_id} />
            ) : null}
          </li>
        ))}
      </ul>
    </>
  );
};

export default CommentsCard;
