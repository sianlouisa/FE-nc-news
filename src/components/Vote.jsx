import React, { Component } from 'react';
import * as api from '../api';

class Vote extends Component {
  state = { voteChange: 0 };

  render() {
    const { votes } = this.props;
    const { voteChange } = this.state;
    return (
      <>
        <p>Votes: {votes + voteChange}</p>
        <button onClick={() => this.vote(1)} disabled={voteChange === 1}>
          Up
        </button>
        <button onClick={() => this.vote(-1)} disabled={voteChange === -1}>
          Down
        </button>
      </>
    );
  }

  vote = inc => {
    const { article_id } = this.props;
    api.vote({ article_id, inc });
    this.setState(state => ({ voteChange: state.voteChange + inc }));
  };
}

export default Vote;
