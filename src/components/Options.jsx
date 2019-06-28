import React, { useState, useEffect } from 'react';
import '../App.css';
import { withStyles } from '@material-ui/core/styles';
import {
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  OutlinedInput,
} from '@material-ui/core';
import MediaQuery from 'react-responsive';

const Options = ({ classes, topics, fetchSortedArticles }) => {
  const [values, setValues] = useState({
    sortBy: 'created_at',
    sortAscending: true,
    limit: 10,
  });
  const [p, setP] = useState(1);

  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  useEffect(() => {
    fetchSortedArticles(
      {
        sort_by: values.sortBy,
        sort_ascending: values.sortAscending,
        limit: values.limit,
        p,
      },
      topics,
    );
  }, [fetchSortedArticles, topics, values, p]);

  const handleChange = (event) => {
    setValues(oldValues => ({
      ...oldValues,
      [event.target.name]: [event.target.value],
    }));
  };

  const handlePageTurn = (inc) => {
    setP(p + inc);
  };

  return (
    <div className="sort">
      <MediaQuery minDeviceWidth={450}>
        <Button
          variant="outlined"
          className={classes.button}
          onClick={() => handlePageTurn(-1)}
          value="-1"
        >
          BACK
        </Button>
        <form className="sort-options" />
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel ref={inputLabel} htmlFor="outlined-age-simple">
            Limit
          </InputLabel>
          <Select
            value={values.limit}
            onChange={handleChange}
            input={<OutlinedInput labelWidth={labelWidth} name="limit" id="outlined-age-simple" />}
          >
            <MenuItem value="">
              <em>Limit</em>
            </MenuItem>
            <MenuItem value={10}>10</MenuItem>
            <MenuItem value={15}>15</MenuItem>
            <MenuItem value={25}>25</MenuItem>
          </Select>
        </FormControl>

        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel ref={inputLabel} htmlFor="outlined-age-simple">
            Sort By
          </InputLabel>
          <Select
            value={values.sortBy}
            onChange={handleChange}
            input={<OutlinedInput labelWidth={labelWidth} name="sortBy" id="outlined-age-simple" />}
          >
            <MenuItem value="">
              <em>Limit</em>
            </MenuItem>
            <MenuItem value="created_at">Newest</MenuItem>
            <MenuItem value="votes">Trending</MenuItem>
            <MenuItem value="comment_count">Popular</MenuItem>
          </Select>
        </FormControl>

        <Button
          variant="outlined"
          className={classes.button}
          onClick={() => handlePageTurn(1)}
          value="1"
        >
          NEXT
        </Button>
      </MediaQuery>
    </div>
  );
};

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
    marginTop: theme.spacing(2),
  },
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});

export default withStyles(styles)(Options);
