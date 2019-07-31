import React, { Component } from "react";
import * as api from "../utils/api.js";

class DeleteComment extends Component {
  state = { author: "jessjelly", article_id: this.props.article_id };

  render() {
    return (
      <div>
        <button type="submit" onClick={this.handleSubmit}>
          Delete my comment
        </button>
      </div>
    );
  }
  handleSubmit = event => {
    event.preventDefault();
    const { comment_id } = this.props;
    api.deleteComment(comment_id).then(this.props.deleteOwnComment(comment_id));
  };
}

export default DeleteComment;
