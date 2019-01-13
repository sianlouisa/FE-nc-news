import React from 'react';

const ArticleCard = props => {
  const { article } = props;
  return (
    <div className="article-card">
      {' '}
      <p>Author: {article.author}</p>
      <p>Time: {article.created_at}</p>
      <p>Comments: {article.comment_count}</p>
    </div>
  );
};

export default ArticleCard;
