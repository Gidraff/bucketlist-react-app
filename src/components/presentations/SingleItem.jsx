import React from "react";

const SingleItem = (props) => {
  return (
    <div>
      <span>
        <span className="items-top-header">Items</span>
        <a
          onClick={props.handleClick(props.id)} 
          className="pull-right btn-success" href="">Add Item</a>
      </span>
      <div>{props.bucketItems}</div>
    </div>
  );
};

export default SingleItem;