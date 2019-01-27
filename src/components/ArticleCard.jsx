import React from 'react';
import { Link } from '@reach/router';
import Moment from 'react-moment';

const ArticleCard = props => {
  const { article } = props;
  return (
    <div className="article-card">
      <Link to={`/users/${article.author}`}>{article.author}</Link>
      <Moment fromNow>{article.created_at}</Moment>
      Comments: {article.comment_count}
    </div>
  );
};

export default ArticleCard;
