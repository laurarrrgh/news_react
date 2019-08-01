import React, { Component } from "react";
import * as api from "../utils/api.js";
import ArticleCard from "./ArticleCard.jsx";
import "../CSS/ArticleCard.css";
import Loading from "./Loading.jsx";

class Articles extends Component {
  state = {
    articles: [],
    sort_by: "created_at",
    order: "asc",
    loading: true
  };

  render() {
    const { topic } = this.props;
    const { articles, loading } = this.state;

    return loading ? (
      <Loading />
    ) : (
      <div className="allArticles">
        <h2>
          {topic
            ? `${topic.charAt(0).toUpperCase() + topic.slice(1)} Articles`
            : "Welcome home...(page)!"}
        </h2>
        <form className="form">
          <select className="dropdown" onChange={this.handleChange}>
            <option value="created_at">Most Recent</option>
            <option value="comment_count">Most Commented</option>
            <option value="votes">Most Popular</option>
          </select>
        </form>

        <ul className="mappedArticles">
          {articles.map(article => {
            return <ArticleCard article={article} key={article.article_id} />;
          })}
        </ul>
      </div>
    );
  }

  componentDidMount() {
    this.fetchArticles();
  }

  componentDidUpdate(prevProps, prevSate) {
    const newTopic = this.props.topic !== prevProps.topic;

    if (newTopic) this.fetchArticles();
  }

  handleClick = event => {
    event.preventDefault();

    const { topic } = this.props;
    const sort_by = event.target.value;
    api.getArticles(topic, sort_by).then(articles => {
      this.setState({ articles });
    });
  };

  handleChange = event => {
    event.preventDefault();
    const { topic } = this.props;
    const sort_by = event.target.value;

    api.getArticles(topic, sort_by).then(articles => {
      this.setState({ articles });
    });
  };

  fetchArticles = async () => {
    const { topic } = this.props;
    const { sort_by } = this.state;

    if (topic === "undefined") {
      await api
        .getArticles()
        .then(articles => this.setState({ articles, loading: false }));
    } else {
      await api.getArticles(topic, sort_by).then(articles => {
        this.setState({ articles, loading: false });
      });
    }
  };
}

export default Articles;
