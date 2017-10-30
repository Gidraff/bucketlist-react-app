import React, { Component } from 'react';

const Bucket = props => (
  <div>
    <h4 className="header-title">Title</h4>
    <ul>{props.listItems}</ul>
  </div>
);

export default Bucket;
