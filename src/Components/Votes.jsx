import React, { Component } from "react";
import * as api from "../utils/api.js";
import propType from "prop-types";
import { navigate } from "@reach/router";

class Votes extends Component {
  state = {
    voteChange: 0
  };
  render() {
    const { voteChange } = this.state;
    const { votes } = this.props;
    return (
      <div>
        <button
          onClick={() => {
            this.voting(1);
          }}
          disabled={voteChange === 1}
        >
          +
        </button>
        <p>{votes + voteChange}</p>
        <button
          onClick={() => {
            this.voting(-1);
          }}
          disabled={voteChange === -1}
        >
          -
        </button>
      </div>
    );
  }
  voting = increment => {
    const { id, section, votes } = this.props;
    //add local storgae
    api.vote(id, increment, section).catch(err => {
      this.setState(state => {
        return { voteChange: state.voteChange - increment };
      }).catch(err => {
        navigate("/error", {
          state: {
            message: "Votes could not be updated"
          },
          replace: true
        });
      });
    });
    this.setState(state => ({
      voteChange: state.voteChange + increment

      // Votes.propType = {votes: propType.number.isRequired}
    }));
  };
}

export default Votes;
