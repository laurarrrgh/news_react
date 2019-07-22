import React, { Component } from "react";
import * as api from "../utils/api.js";
import "../CSS/SingleArticle.css";
import PostComment from "./PostComment.jsx";
import DeleteComment from "./DeleteComment.jsx";
import * as moment from "moment";

class SingleArticle extends Component {
  state = {
    article: {},
    comments: []
  };

  render() {
    const { article, comments } = this.state;
    // const { comment_id } = this.props;

    return (
      <div className="singleArticleMain">
        <span className="leadarticle">
          <h1 className="singleArticleHeader">{article.title}</h1>
          <p className="articlebody">{article.body}</p>
          <small className="smalldetails">
            Posted by:{article.author} Votes:{article.votes} Posted at:
            {moment(article.created_at).format("DD-MM-YYYY hh:mm:ss")}
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
                <small>Author: {comment.author} </small>
                <small>Votes: {comment.votes}</small>
                <small>
                  Posted at:
                  {moment(comment.created_at).format("DD-MM-YYYY hh:mm:ss")}
                </small>
                {/* if(this.state.article.author === comment.author) */}

                <DeleteComment>
                  comment_id = {comment.comment_id}
                  removeComment={this.removeComment}
                </DeleteComment>
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

  conditionalDelete = () => {
    console.log(this.props, "conditionalDeleteprops");

    /* {if(this.state.article.author === comment.author)} */
  };
}
// add remove comment
export default SingleArticle;
