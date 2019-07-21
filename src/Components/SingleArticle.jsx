import React, { Component } from "react";
import * as api from "../utils/api.js";
import "../CSS/SingleArticle.css";
import PostComment from "./PostComment.jsx";

class SingleArticle extends Component {
  state = {
    article: {},
    comments: []
  };

  render() {
    const { article, comments } = this.state;
    const { comment_id } = this.props;

    return (
      <div className="singleArticleMain">
        <span className="leadarticle">
          <h1 className="singleArticleHeader">{article.title}</h1>
          <p className="articlebody">{article.body}</p>
          <small className="smalldetails">
            Posted by:{article.author} Votes:{article.votes} Posted at:
            {article.created_at}
          </small>
        </span>
        <div className="comments">
          <PostComment
            className="commentBox"
            key="postComment"
            updateComments={this.displayComment}
            id={article.article_id}
          />
          {comments.map(comment => {
            return (
              <ul className="comment" key={comment.comment_id}>
                <p>{comment.body}</p>
                <small>{comment.author} </small>
                <small>{comment.votes}</small>
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
