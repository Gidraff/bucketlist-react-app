import React from "react";
import SingleItem from "./SingleItem";

const Items = (props) => {
  const { items } = props.bucketListData;
  const bucketItems = items.map((item) => {
    if(props.id === item.bucketlist_id){
      return(
        <div className="item-container" key={item.id}>
          {item.item_name}
          <span className="item-buttons-container">
            <a href="#" onClick={props.handleEdit(item.id)}className="item-button">Edit</a>
            <a href="#" onClick={props.handleDeleteClick(item.id)} className="item-button">Delete</a>
          </span>
        </div>
      );
    }
  });
  return (
    <div>
      <SingleItem
        id={props.id}
        bucketItems={bucketItems}
        handleClick={props.handleClick}/>
    </div>
  );
};

export default Items;
