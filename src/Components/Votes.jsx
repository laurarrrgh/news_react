import React, { Component } from "react";
import * as api from "../utils/api.js";

class Votes extends Component {
  state = {
    voteChange: 0,
    article: this.props.article,
    comment: this.props.comment
  };
  render() {
    const { voteChange } = this.state;
    const { votes } = this.props;
    return (
      <div>
        <button
          onClick={() => {
            this.vote(1);
          }}
        >
          +
        </button>
        <p>vote</p>
        <button
          onClick={() => {
            this.vote(-1);
          }}
        >
          -
        </button>
      </div>
    );
  }
  vote = increment => {
    const { id } = this.props;

    api
      .vote(id, increment)
      .then(updatedVotes =>
        this.setState(state => ({ voteChange: state.voteChange + increment }))
      );
    // .catch(err =>
    //   this.setState(state => {

    //       voteChange: state.voteChange;

    //   })
    // );
  };

  // changeArticleVote;

  // changeCommentVote;

  // }
  //   Votes.proptypes = {votes: Proptype.number require}
}

export default Votes;
