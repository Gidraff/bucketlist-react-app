import React from 'react';
import { Redirect } from 'react-router-dom';
import Bucket from './Bucket';
import { Glyphicon } from 'react-bootstrap';


const BucketList = (props) => {
  const { bucketlists } = props.bucketlistsData;
  const { searchBuckets } = props.bucketlistsData;

  const listItems = bucketlists.map(bucket => (
    <div className="list-item" key={bucket.id}>
      <a href="#" onClick={props.showItems(bucket.id)} > {bucket.title} </a>
      <Glyphicon glyph="trash" className="form-button" onClick={props.handleDeleteClick(bucket.id)} />
      <Glyphicon glyph="pencil" className="form-button" onClick={props.handleClick(bucket.id)} />
    </div>
  ));

  const searchItems = searchBuckets && searchBuckets.length >= 1  ?  searchBuckets.map(bucket => (
    <div className="list-item" key={bucket.id}>
      <a href="#" onClick={props.showItems(bucket.id)} >{bucket.title}</a>
      <button className="form-button" onClick={props.handleClick(bucket.id)}>Edit</button>
      <button className="form-button" onClick={props.handleDeleteClick(bucket.id)}>Delete</button>

    </div>
  )): <div>
    <p>
      No matches found ;<br/>
      Go back  <a href="/dashboard"> Home </a>
    </p>
  </div> ;

  if (listItems.length < 1) {
    return (
      <div className="empty-container">
        <h4>No buckets available</h4>
      </div>
    );
  }

  return (
    <div className="list-container">
      <h6 className="header-title">Bucket Lists</h6>
      <Bucket 
        listItems={props.bucketlistsData.isSearch ? searchItems : listItems } />
    </div>

  );
};

export default BucketList;
