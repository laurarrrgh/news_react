import React, { Component } from "react";
import * as api from "../utils/api.js";
import { navigate } from "@reach/router";
import "../CSS/PostComment.css";

class PostComment extends Component {
  state = { body: "", author: "jessjelly" };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <textarea
          className="postComment"
          placeholder="Join the Conversation...."
          id="body"
          rows="5"
          columns="20"
          type="text"
          value={this.state.body}
          onChange={this.handleChange}
        />
        <br />
        <button
          className="submit"
          type="submit"
          disabled={this.state.body.length === 0}
        >
          Submit!
        </button>
      </form>
    );
  }

  handleChange = event => {
    const { id, value } = event.target;
    this.setState({ [id]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const author = this.state.author;
    const { body } = this.state;
    const { id } = this.props;
    api
      .postComment(author, body, id)
      .then(({ comment }) => {
        this.props.displayComment(comment);
        this.setState({ body: "" });
      })
      .catch(err => {
        navigate("/error", {
          state: {
            message: "Comment could not be added"
          },
          replace: true
        });
      });
  };
}

export default PostComment;
