import React, { Component } from "react";
import Bucket from "./Bucket";


const BucketList = (props) => {
  const { bucketlists } = props.bucketlistsData;
  const { searchBuckets } = props.bucketlistsData;

  const listItems = bucketlists.map(bucket => (
    <div className="list-item" key={bucket.id}>
      <a href="#" onClick={props.showItems(bucket.id)} > {bucket.title} </a>
      <button className="form-button" onClick={props.handleClick(bucket.id)}>Edit</button>
      <button className="form-button" onClick={props.handleDeleteClick(bucket.id)}>Delete</button>
    </div>
  ));

  const searchItems = searchBuckets.map(bucket => (
    <div className="list-item" key={bucket.id}>
      <a href="#" onClick={props.showItems(bucket.id)} >{bucket.title}</a>
      <button className="form-button" onClick={props.handleClick(bucket.id)}>Edit</button>
      <button className="form-button" onClick={props.handleDeleteClick(bucket.id)}>Delete</button>

    </div>
  ));

  if (listItems.length < 1) {
    return (
      <div className="empty-container">
        <h4>No buckets available</h4>
      </div>
    );
  }

  return (
    <div className="list-container">
      <h4 className="header-title">Bucket Lists</h4>
      <Bucket listItems={props.bucketlistsData.isSearch ? searchItems : listItems } />
    </div>

  );
};

export default BucketList;
