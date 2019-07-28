import React, { Component } from "react";
import * as api from "../utils/api.js";

class PostComment extends Component {
  state = { body: "", author: "jessjelly" };
  render() {
    return (
      <form className="postComment" onSubmit={this.handleSubmit}>
        <label htmlFor="comment">Join the conversation...</label>

        <textarea
          placeholder="What do you think? "
          id="body"
          rows="4"
          columns="30"
          type="text"
          value={this.state.body}
          onChange={this.handleChange}
        />
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
    api.postComment(author, body, id).then(({ comment, article_id }) => {
      this.props.displayComment(comment);
      this.setState({ body: "" });
    });
    // .catch(err => {
    //   console.log(err.response);
    // });
  };
}

export default PostComment;
