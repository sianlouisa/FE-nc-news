import React, { Component } from 'react';
import './css/Auth.css';

class Options extends Component {
  state = {
    sort_by: 'created_at',
    sort_ascending: true,
    p: 1,
    limit: 10,
    limits: [5, 10, 15],
  };
  render() {
    const { limits } = this.state;
    return (
      <div className="sort">
        <form onSubmit={this.handleSubmit} className="sort-options">
          <button
            className="mui-btn mui-btn--raised mui-btn--primary"
            onClick={() => this.handlePageTurn(-1)}
            value="-1"
          >
            {'<'}
          </button>
          <div className="mui-dropdown">
            <button
              className="mui-btn mui-btn--primary"
              data-mui-toggle="dropdown"
            >
              View
              <span className="mui-caret" />
            </button>
            <ul className="mui-dropdown__menu" onClick={this.handleLimitClick}>
              {limits.map((limit, i) => (
                <li value={limit} key={i}>
                  {limit}
                </li>
              ))}
            </ul>
          </div>
          <div className="mui-dropdown">
            <button
              className="mui-btn mui-btn--primary"
              data-mui-toggle="dropdown"
            >
              Sort Type
              <span className="mui-caret" />
            </button>
            <select
              className="mui-dropdown__menu"
              onClick={this.handleSortClick}
            >
              <option value="votes">Votes</option>
              <option value="comment_count">Comments</option>
              <option value="created_at">Date</option>
            </select>
          </div>
          <div className="mui-dropdown">
            <button
              className="mui-btn mui-btn--primary"
              data-mui-toggle="dropdown"
            >
              Sort By
              <span className="mui-caret" />
            </button>
            <select
              className="mui-dropdown__menu mui-dropdown__menu--right"
              onClick={this.handleAscClick}
            >
              <option value="true">Ascending</option>
              <option value="false">Descening</option>
            </select>
          </div>
          <button className="mui-btn mui-btn--primary" type="submit">
            Submit
          </button>
          <button
            className="mui-btn mui-btn--raised mui-btn--primary"
            onClick={() => this.handlePageTurn(1)}
            value="1"
          >
            {'>'}
          </button>
        </form>
      </div>
    );
  }

  handleLimitClick = event => {
    const limit = event.target.value;
    this.setState({ limit });
  };

  handleSortClick = event => {
    const sort_by = event.target.value;
    this.setState({ sort_by });
  };

  handleAscClick = event => {
    const sort_ascending = event.target.value;
    this.setState({ sort_ascending });
  };

  handlePageTurn = inc => {
    const { sort_by, sort_ascending, p, limit } = this.state;
    const { topic } = this.props;
    this.setState(
      state => ({
        p: state.p + inc,
      }),
      () =>
        this.props.fetchSortedArticles(
          { sort_by, sort_ascending, p, limit },
          topic,
        ),
    );
  };

  handleSubmit = event => {
    event.preventDefault();
    const { topic } = this.props;
    const { sort_by, sort_ascending, p, limit } = this.state;
    this.props.fetchSortedArticles(
      { sort_by, sort_ascending, p, limit },
      topic,
    );
  };
}

export default Options;
