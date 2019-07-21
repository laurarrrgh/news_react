import React, { Component } from "react";
import * as api from "../utils/api.js";

class Comments extends Component {
  state = { body: "", author: "jessjelly" };
  render() {
    const { body } = this.state;
    return (
      <form className="postComment" onSubmit={this.handleSubmit}>
        <label htmlFor="comment">Post a Comment</label>
        <br />
        <textarea
          placeholder="What do you think? "
          id="body"
          type="text"
          value={body}
          onChange={this.handleChange}
        />
        <button type="submit">Submit!</button>
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
        console.log(err.response);
      });
  };
}

export default Comments;
