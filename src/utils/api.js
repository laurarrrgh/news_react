import axios from "axios";

const BASE_URL = "https://laura-news-api.herokuapp.com/api";

export const getTopics = async () => {
  const { data } = await axios.get(`${BASE_URL}/topics`);
  return data.topics;
};

export const getArticles = async topic => {
  const { data } = await axios.get(`${BASE_URL}/articles`, {
    params: { topic }
  });
  return data.articles;
};

export const postArticle = async article => {
  const { data } = await axios.post(`${BASE_URL}`, article);
  return data.article;
};

export const getArticle = async article_id => {
  const { data } = await axios.get(`${BASE_URL}`, article_id);
  return data.article;
};
