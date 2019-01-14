import React, { Component } from 'react';
import * as api from '../api';
import Button from 'muicss/lib/react/button';

class Vote extends Component {
  state = { voteChange: 0 };

  render() {
    const { votes } = this.props;
    const { voteChange } = this.state;
    return (
      <>
        <div className="vote">
          <Button
            variant="fab"
            size="small"
            className="vote-but"
            onClick={() => this.vote(1)}
            disabled={voteChange === 1}
          >
            +
          </Button>{' '}
          {votes + voteChange}{' '}
          <Button
            variant="fab"
            size="small"
            className="vote-but"
            onClick={() => this.vote(-1)}
            disabled={voteChange === -1}
          >
            -
          </Button>
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
