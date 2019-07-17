import React, { Component } from "react";
import * as api from "../utils/api.js";

class SingleArticle extends Component {
  state = {
    article: {},
    comments: []
  };

  render() {
    const { article, comments } = this.state;
    const { comment_id } = this.props;

    return (
      <div>
        <h1>{article.title}</h1>
        <p>{article.body}</p>
        <div className="comments">
          {comments.map(comment => {
            return (
              <ul className="comment" key={comment.comment_id}>
                <h4>{comment.body}</h4>
                <h6>{comment.author}</h6>
                <h6>{comment.votes}</h6>
              </ul>
            );
          })}
        </div>
      </div>
    );
  }

  componentDidMount() {
    this.fetchArticle();
    this.fetchComments();
  }

  fetchArticle = () => {
    const { article_id } = this.props;
    api.getArticle(article_id).then(article => {
      this.setState({ article });
    });
  };

  fetchComments = () => {
    const { article_id } = this.props;
    api.getComments(article_id).then(comments => {
      this.setState({ comments });
    });
  };
}

export default SingleArticle;
