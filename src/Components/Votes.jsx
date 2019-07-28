import React, { Component } from "react";
import * as api from "../utils/api.js";

class Votes extends Component {
  state = {
    voteChange: 0
    // article: this.props.article,
    // comment: this.props.comment
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
          disabled={voteChange === 1}
        >
          +
        </button>
        <p>{votes + voteChange}</p>
        <button
          onClick={() => {
            this.vote(-1);
          }}
          disabled={voteChange === -1}
        >
          -
        </button>
      </div>
    );
  }
  vote = increment => {
    const { id, section } = this.props;

    api
      .vote(id, increment, section)
      .then(updatedVotes => {})
      .catch(err => {
        this.setState(state => {
          return { voteChange: state.voteChange - increment };
        });
      });
    this.setState(state => ({ voteChange: state.voteChange + increment }));

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
