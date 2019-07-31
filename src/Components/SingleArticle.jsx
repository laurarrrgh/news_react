import React, { Component } from "react";
import * as api from "../utils/api.js";
import "../CSS/SingleArticle.css";
import PostComment from "./PostComment.jsx";
import DeleteComment from "./DeleteComment.jsx";
import Votes from "./Votes.jsx";
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
            Posted by:{article.author} Posted at:
            {moment(article.created_at).format("DD-MM-YYYY hh:mm")}
          </small>
          <Votes
            votes={article.votes}
            id={article.article_id}
            section="articles"
          />
        </span>
        <div className="comments">
          <PostComment
            className="commentBox"
            key="postComment"
            displayComment={this.displayComment}
            id={article.article_id}
          />
          {comments.map(comment => {
            return (
              <li className="comment" key={comment.comment_id}>
                <p>{comment.body}</p>
                <small>Author: {comment.author} </small>
                <small>
                  Posted at:
                  {moment(comment.created_at).format("DD-MM-YYYY hh:mm")}
                </small>
                {comment.author === "jessjelly" ? (
                  <DeleteComment
                    comment_id={comment.comment_id}
                    deleteOwnComment={this.deleteOwnComment}
                  />
                ) : null}
                <Votes
                  votes={comment.votes}
                  id={comment.comment_id}
                  section="comments"
                />
              </li>
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

  displayComment = comment => {
    this.setState(state => {
      return {
        comments: [comment, ...this.state.comments]
      };
    });
  };

  deleteOwnComment = comment_id => {
    //api.deleteComment(comment_id).then(() => this.setState()); //setState needs to be return filter of the comments from above
  };
}
export default SingleArticle;
