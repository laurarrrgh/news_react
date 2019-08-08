import React, { Component } from "react";
import * as api from "../utils/api.js";
import "../CSS/SingleArticle.css";
import "../CSS/Votes.css";
import PostComment from "./PostComment.jsx";
import DeleteComment from "./DeleteComment.jsx";
import Votes from "./Votes.jsx";
import * as moment from "moment";
import { navigate } from "@reach/router";
import Loading from "./Loading.jsx";

class SingleArticle extends Component {
  state = {
    article: {},
    comments: [],
    loading: true
  };

  render() {
    const { article, comments, loading } = this.state;

    return loading ? (
      <Loading />
    ) : (
      <div className="singleArticleMain">
        <span className="leadArticle">
          <h1 className="singleArticleHeader">{article.title}</h1>
          <div className="gridBox">
            <p className="articleBody">
              {article.body}
              <br />
              <br />
              <small className="smalldetails">
                Posted by:{article.author} Posted at:
                {moment(article.created_at).format("DD-MM-YYYY hh:mm")}
              </small>
            </p>
            <Votes
              className="voteBox"
              votes={article.votes}
              id={article.article_id}
              section="articles"
            />
          </div>
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
                <div className="commentGridBox">
                  <p className="commentBody">
                    {comment.body}
                    <br /> <br />
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
                  </p>
                  <br />
                  <Votes
                    className="voteBox"
                    votes={comment.votes}
                    id={comment.comment_id}
                    section="comments"
                  />
                </div>
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

  fetchArticle = async () => {
    const { article_id } = this.props;
    await api
      .getArticle(article_id)
      .then(article => {
        this.setState({ article, loading: false });
      })

      .catch(err => {
        navigate("/error", {
          state: {
            message: "This article could not be found"
          },
          replace: true
        });
      });
  };

  fetchComments = () => {
    const { article_id } = this.props;
    api
      .getComments(article_id)
      .then(comments => {
        this.setState({ comments, loading: false });
      })
      .catch(err => {
        navigate("/error", {
          state: {
            message: "Comments could not be loaded"
          },
          replace: true
        });
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
    const comments = this.state.comments.filter(comment => {
      return comment.comment_id !== comment_id;
    });
    this.setState({
      comments
    });
  };
}

export default SingleArticle;
