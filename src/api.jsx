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
