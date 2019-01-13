import React, { Component } from 'react';
import * as api from '../api';

class Vote extends Component {
  state = { voteChange: 0 };

  render() {
    const { votes } = this.props;
    const { voteChange } = this.state;
    return (
      <>
        <div className="vote">
          <button
            className="mui-btn mui-btn--small mui-btn--primary mui-btn--fab"
            onClick={() => this.vote(1)}
            disabled={voteChange === 1}
          >
            +
          </button>
          {votes + voteChange}
          <button
            className="mui-btn mui-btn--small mui-btn--primary mui-btn--fab"
            onClick={() => this.vote(-1)}
            disabled={voteChange === -1}
          >
            -
          </button>
        </div>
      </>
    );
  }

  vote = inc => {
    const { article_id, comment_id } = this.props;
    api.vote({ article_id, inc, comment_id });
    this.setState(state => ({ voteChange: state.voteChange + inc }));
  };
}

export default Vote;
