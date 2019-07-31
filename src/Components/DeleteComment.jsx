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

    console.log(this.props.comment_id);
    console.log(this.props);
    // comment_id is working
    // missing article_id - need article_id for deleteComment util in api.js
    console.log(this.state);

    api.deleteComment(comment_id).then(this.props.deleteOwnComment(comment_id));
    // delete comment from /articles/${article_id}/comments/${comment_id}
    // this.props = obj{arr[0: comment_id]}
    // state defined above = author
    // need conditional logic so that delete button is only on article where this.props.author === comment.author
  };
  // path not found so delete not working
}

export default DeleteComment;
