import React from "react";

const SingleItem = (props) => {
  return (
    <div>
      <span>
        <span className="items-top-header">Items</span>
        <button
          onClick={props.handleClick(props.id)} 
          className="pull-right btn-success add-button" href="">Add Item</button>
        <button onClick={props.hideItems} className="pull-right back-button">Go Back</button>
      </span>
      <div>{props.bucketItems}</div>
    </div>
  );
};

export default SingleItem;