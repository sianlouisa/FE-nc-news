import React, { Component } from 'react';
import '../App.css';
import { withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import Button from '@material-ui/core/Button';
import MediaQuery from 'react-responsive';

class Options extends Component {
  state = {
    sort_by: 'created_at',
    sort_ascending: true,
    p: 1,
    limit: 10,
  };
  render() {
    const { classes } = this.props;
    const { limit, sort_by } = this.state;
    return (
      <div className="sort">
        <MediaQuery minDeviceWidth={450}>
          <Button
            variant="outlined"
            className={classes.button}
            onClick={() => this.handlePageTurn(-1)}
            value="-1"
          >
            BACK
          </Button>
          <form onSubmit={this.handleSubmit} className="sort-options" />
          <FormControl className={classes.formControl}>
            <InputLabel shrink htmlFor="age-native-label-placeholder">
              Limit
            </InputLabel>
            <NativeSelect value={limit} onChange={this.handleChange}>
              <option value={5}>5</option>
              <option value={10}>10</option>
              <option value={15}>15</option>
            </NativeSelect>
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel shrink htmlFor="age-native-label-placeholder">
              Sort Type
            </InputLabel>
            <NativeSelect value={sort_by} onChange={this.handleChange}>
              <option value="created_at">Newest</option>
              <option value="votes">Trending</option>
              <option value="comment_count">Popular</option>
            </NativeSelect>
          </FormControl>
          <Button
            variant="outlined"
            className={classes.button}
            onClick={() => this.handlePageTurn(1)}
            value="1"
          >
            NEXT
          </Button>
        </MediaQuery>
      </div>
    );
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.state !== prevState) {
      const { topic, fetchSortedArticles } = this.props;
      const { sort_by, sort_ascending, p, limit } = this.state;
      fetchSortedArticles({ sort_by, sort_ascending, p, limit }, topic);
    }
  }

  handleChange = event => {
    const sort = event.target.value;
    sort.length <= 2
      ? this.setState({ limit: sort })
      : this.setState({ sort_by: sort });
  };

  handlePageTurn = inc => {
    const { sort_by, sort_ascending, p, limit } = this.state;
    const { topic, fetchSortedArticles } = this.props;
    this.setState(
      state => ({
        p: state.p + inc,
      }),
      () => fetchSortedArticles({ sort_by, sort_ascending, p, limit }, topic),
    );
  };
}

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});

export default withStyles(styles)(Options);
