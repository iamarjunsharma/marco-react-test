import React from 'react';
import CircularProgress from 'material-ui/CircularProgress';

// Component for showing Loading Screen on Page Load
const Loading = () => (
  <div className="loading">
    <CircularProgress size={80} thickness={5} />
  </div>
);

export default Loading;
