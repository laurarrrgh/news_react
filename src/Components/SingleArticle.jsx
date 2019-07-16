import React, { Component } from "react";
import * as api from "../utils/api.js";

class SingleArticle extends Component {
  state = {
    article: {}
  };

  render() {
    const { article } = this.state;

    return (
      <div>
        <h1>{article.title}</h1>
        <p>{article.body}</p>
      </div>
    );
  }
  componentDidMount() {
    this.fetchArticle();
  }

  fetchArticle = () => {
    const { article_id } = this.props;
    api.getArticle(article_id).then(article => {
      this.setState({ article });
    });
  };
}

export default SingleArticle;
