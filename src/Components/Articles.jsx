import React, { Component } from "react";
import * as api from "../utils/api.js";
import ArticleCard from "./ArticleCard.jsx";

class Articles extends Component {
  state = {
    articles: []
  };

  render() {
    // const Articles = props => {
    const { topic } = this.props;
    const { articles } = this.state;
    // };const Articles = props => {
    return (
      <div>
        <ul>
          {articles.map(article => {
            return <ArticleCard article={article} key={article.article_id} />;
          })}
        </ul>
      </div>

      // <h2>{topic? 'Articles on ${topic}' : 'All Articles'</h2>
    );
  }

  componentDidMount() {
    this.fetchArticles();
  }
  // componentDidUpdate(prevProps, prevSate) {
  //   const newTopic = this.props.topic !== prevProps.topic;

  //   if (newTopic) this.fetchArticles();
  // }
  fetchArticles = () => {
    //const { topic } = this.props;
    api.getArticles().then(articles => {
      this.setState({ articles });
    });
  };
}

// fetchArticles = () => {
//   const { topic } = this.props;
//   if (topic === "all") {
//     api.getArticles(sort_by, order).then(articles => this.setState({ articles }))
//   } else {
//     api
//       .getArticle(topic)
//       .then(articles => this.setState({ articles }))
//   }

export default Articles;
