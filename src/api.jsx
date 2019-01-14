import axios from 'axios';

const BASE_URL = 'https://sianncnews.herokuapp.com/api';

export const getTopics = async () => {
  const { data } = await axios.get(`${BASE_URL}/topics`);
  return data.topics;
};

// ARTICLES

export const getArticles = async (sort, topic) => {
  if (sort === undefined) {
    if (topic === undefined) {
      const { data } = await axios.get(`${BASE_URL}/articles`);
      return data.articles;
    } else {
      const { data } = await axios.get(`${BASE_URL}/topics/${topic}/articles`);
      return data.articles;
    }
  }
  if (sort !== undefined) {
    const { sort_by, sort_ascending, p, limit } = sort;
    let query = `?limit=${limit}&sort_by=${sort_by}&p=${p}`;
    if (sort_ascending === 'true') {
      query += `&sort_ascending=true`;
    }
    if (topic === undefined) {
      const { data } = await axios.get(`${BASE_URL}/articles${query}`);
      return data.articles;
    } else {
      const { data } = await axios.get(
        `${BASE_URL}/topics/${topic}/articles${query}`,
      );
      return data.articles;
    }
  }
};

export const articleLimits = async (limit, topic) => {
  if (topic === undefined) {
    const { data } = await axios.get(`${BASE_URL}/articles?limit=${limit}`);
    return data.articles;
  }

  const { data } = await axios.get(
    `${BASE_URL}/topics/${topic}/articles?limit=${limit}`,
  );
  return data.articles;
};

export const articleSortBy = async (sort, topic) => {
  const { sort_ascending } = sort;
  let ascStr = '';
  if (sort_ascending) {
    ascStr = '&sort_ascending=true';
  }
  if (topic === undefined) {
    const { data } = await axios.get(
      `${BASE_URL}/articles?sort_by=${sort.sort_by}${ascStr}`,
    );
    return data.articles;
  }
  const { data } = await axios.get(
    `${BASE_URL}/topics/${topic}/articles?sort_by=${sort.sort_by}${ascStr}`,
  );
  return data.articles;
};

export const getArticleById = async article_id => {
  const { data } = await axios.get(`${BASE_URL}/articles/${article_id}`);
  return data.articles;
};

// USERS

export const getUsers = async username => {
  if (username === undefined) {
    const { data } = await axios.get(`${BASE_URL}/users`);
    return data;
  } else {
    const { data } = await axios.get(`${BASE_URL}/users/${username}`);
    return data;
  }
};

// COMMENTS

export const getArticleComments = async article_id => {
  const { data } = await axios.get(
    `${BASE_URL}/articles/${article_id}/comments?sort_by=created_at`,
  );
  return data.comments;
};

// QUERIES

export const getArticlesMostComments = async () => {
  const { data } = await axios.get(
    `${BASE_URL}/articles?sort_by=comment_count`,
  );
  return data.articles;
};

// POSTS

export const postTopic = async newTopic => {
  const { data } = await axios.post(`${BASE_URL}/topics`, {
    description: newTopic.description,
    slug: newTopic.slug,
  });
  return data;
};

export const postArticle = async newArticle => {
  const { data } = await axios.post(
    `${BASE_URL}/topics/${newArticle.topic}/articles`,
    {
      title: newArticle.title,
      body: newArticle.body,
      topic: newArticle.topic,
      created_by: newArticle.user_id,
      article_id: newArticle.article_id,
    },
  );
  return data;
};

export const postCommentOnArticle = async newComment => {
  const { data } = await axios.post(
    `${BASE_URL}/articles/${newComment.article_id}/comments`,
    {
      user_id: newComment.user_id,
      body: newComment.body,
      article_id: newComment.article_id,
    },
  );
  return data;
};

// DELETE

export const deleteItem = async article_id => {
  const { data } = await axios.delete(`${BASE_URL}/articles/${article_id}`);
  return data;
};

// PATCH

export const vote = async toPatch => {
  const { article_id, inc, comment_id } = toPatch;
  if (comment_id === undefined) {
    const { data } = await axios.patch(
      `${BASE_URL}/articles/${toPatch.article_id}`,
      { inc_votes: inc },
    );
    return data;
  } else {
    const { data } = await axios.patch(
      `${BASE_URL}/articles/${article_id}/comments/${comment_id}`,
      { inc_votes: inc },
    );
    return data;
  }
};
