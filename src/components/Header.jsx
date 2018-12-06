import React from 'react';
import '../css/header.css';

const MainHeader = props => {
  return (
    <div className="jumbotron" style={{ height: '20px' }}>
      <h1>{props.Header}</h1>
    </div>
  );
};

export default MainHeader;
