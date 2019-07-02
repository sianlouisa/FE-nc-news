import React, { useState, useEffect } from 'react';
import '../App.css';
import { withStyles } from '@material-ui/core/styles';
import { Tabs, Tab, Paper } from '@material-ui/core';

const Options = ({
  classes, topics, fetchSortedArticles, page, limit,
}) => {
  const [sortBy, setSortBy] = useState('created_at');
  const [tabValue, setTabValue] = React.useState(0);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
    if (newValue === 0) {
      setSortBy('created_at');
    }
    if (newValue === 1) {
      setSortBy('votes');
    }
    if (newValue === 2) {
      setSortBy('comment_count');
    }
    fetchSortedArticles({ sort_by: sortBy }, topics, page, limit);
  };

  return (
    <div className="filter-options">
      <Paper className={classes.root}>
        <Tabs
          value={tabValue}
          onChange={handleTabChange}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          <Tab label="Newest" />
          <Tab label="Popular" />
          <Tab label="Trending" />
        </Tabs>
      </Paper>
    </div>
  );
};

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
});

export default withStyles(styles)(Options);
