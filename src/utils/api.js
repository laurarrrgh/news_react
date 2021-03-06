import axios from "axios";

const BASE_URL = "https://laura-news-api.herokuapp.com/api";

export const getTopics = async () => {
  const { data } = await axios.get(`${BASE_URL}/topics`);
  return data.topics;
};

export const getArticles = async (topic, sort_by) => {
  const { data } = await axios.get(`${BASE_URL}/articles`, {
    params: { topic, sort_by }
  });
  return data.articles;
};

export const getArticle = async article_id => {
  const { data } = await axios.get(`${BASE_URL}/articles/${article_id}`);

  return data.article;
};

export const getComments = async article_id => {
  const { data } = await axios.get(
    `${BASE_URL}/articles/${article_id}/comments`
  );
  return data.comments;
};
export const postComment = async (username, body, article_id) => {
  const { data } = await axios.post(
    `${BASE_URL}/articles/${article_id}/comments`,
    {
      body,
      username,
      article_id
    }
  );
  return data;
};

export const deleteComment = async comment_id => {
  await axios.delete(`${BASE_URL}/comments/${comment_id}`);
};

export const vote = async (id, incVotes, section) => {
  const { data } = await axios.patch(`${BASE_URL}/${section}/${id}/`, {
    incVotes
  });
  return data;
};
