import axios from 'axios';

const BASE_URL = 'https://sianncnews.herokuapp.com/api';

export const getTopics = async () => {
  const { data } = await axios.get(`${BASE_URL}/topics`);
  return data.topics;
};

// ARTICLES

export const getArticles = async topic => {
  if (topic === undefined) {
    const { data } = await axios.get(`${BASE_URL}/articles`);
    return data.articles;
  } else {
    const { data } = await axios.get(`${BASE_URL}/topics/${topic}/articles`);
    return data.articles;
  }
};

export const getArticleById = async article_id => {
  const { data } = await axios.get(`${BASE_URL}/articles/${article_id}`);
  return data.articles;
};

// USERS

export const getUsers = async () => {
  const { data } = await axios.get(`${BASE_URL}/users`);
  return data;
};

export const getUserById = async user_id => {
  const { data } = await axios.get(`${BASE_URL}/users/${user_id}`);
  return data;
};

// COMMENTS

export const getArticleComments = async article_id => {
  const { data } = await axios.get(
    `${BASE_URL}/articles/${article_id}/comments?sort_by=created_at`,
  );
  return data.comments;
};

// QUERIES

export const articleLimits = async limit => {
  const { data } = await axios.get(`${BASE_URL}/articles?limit=${limit}`);
  return data.articles;
};

export const articleSortBy = async sortBy => {
  const { data } = await axios.get(
    `${BASE_URL}/articles?sort_by=${sortBy}&sort_ascending=true`,
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
      created_by: newArticle.user_id,
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
  const { data } = await axios.patch(
    `${BASE_URL}/articles/${toPatch.article_id}`,
    { inc_votes: toPatch.inc },
  );
  return data;
};
