import React from 'react';
import { connect } from 'react-redux';

const SingleItem = (props) => {
  return (
    <div>
      <span>
        <span className='items-top-header'>
          {props.bucketListData.currentBucketTitle} <span className="item-size">{props.items.length}</span><br />
          {props.items.length < 1 ? 'No Items available' : props.items.length + ' items'}
          {props.bucketListData.currentBucketDescription ?
            <p>{props.bucketListData.currentBucketDescription}</p> : <p className="description">No description</p> }
        </span>
        <button
          onClick={props.handleClick({
            id: props.bucketItemData.current_id,
            title: props.bucketItemData.currentBucketTitle,
            description: props.bucketItemData.currentBucketDescription
          })}
          className='pull-right btn-primary add-button' href=''>Add Item</button>
        <button onClick={props.hideItems} className='pull-right  btn-default back-button'>Go Back</button>
      </span>
      <div>{props.bucketItems}</div>
    </div>
  );
};

const mapStateToProps = state => {
  return{
    bucketItemData: state.buckets
  };
};

export default connect(mapStateToProps)(SingleItem);
