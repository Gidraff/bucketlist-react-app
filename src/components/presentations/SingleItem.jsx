import React from 'react';
import { connect } from 'react-redux';

const SingleItem = (props) => {
  return (
    <div>
      <span>
        <span className='items-top-header'>
          <b>
            {props.bucketListData.currentBucketTitle}
          </b>
          {props.bucketListData.currentBucketDescription ?
            <p>{props.bucketListData.currentBucketDescription}</p> : <p className="bucket has no description">No description</p> }
          {props.items.length < 1 ? `${props.items.length} Item(s) available` : <span className='item-size'>{props.items.length} item(s)</span>}
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
