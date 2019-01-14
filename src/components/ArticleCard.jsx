import React from 'react';
import { Link } from '@reach/router';
import Moment from 'react-moment';

const ArticleCard = props => {
  const { article } = props;
  return (
    <div className="article-card">
      {' '}
      <p>
        Author: <Link to={`/users/${article.author}`}>{article.author}</Link>
      </p>
      <p>
        <Moment>{article.created_at}</Moment>
      </p>
      <p>Comments: {article.comment_count}</p>
    </div>
  );
};

export default ArticleCard;
