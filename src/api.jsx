import axios from 'axios';

const BASE_URL = 'https://sianncnews.herokuapp.com/api';

export const getTopics = async () => {
  const { data } = await axios.get(`${BASE_URL}/topics`);
  return data.topics;
};

export const getArticlesByTopic = async topic => {
  const { data } = await axios.get(`${BASE_URL}/topics/${topic}/articles`);
  return data.articles;
};

export const getArticles = async () => {
  const { data } = await axios.get(`${BASE_URL}/articles`);
  return data.articles;
};

export const getArticleById = async article_id => {
  const { data } = await axios.get(`${BASE_URL}/articles/${article_id}`);
  return data.articles;
};

export const getUserById = async user_id => {
  const { data } = await axios.get(`${BASE_URL}/users/${user_id}`);
  return data;
};

export const getArticleComments = async article_id => {
  const { data } = await axios.get(
    `${BASE_URL}/articles/${article_id}/comments`,
  );
  return data.comments;
};

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

export const getUsers = async () => {
  const { data } = await axios.get(`${BASE_URL}/users`);
  return data;
};

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
      user_id: newArticle.created_by,
    },
  );
  console.log(data);
  return data;
};
