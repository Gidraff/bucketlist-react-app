import React from 'react';

const SingleItem = (props) => {
  return (
    <div>
      <span>
        <span className='items-top-header'>
          {props.items.length < 1 ? 'No Items available' : <p><b>{props.bucketListData.currentBucketTitle}</b></p>}
          {props.bucketListData.currentBucketDescription ?
            <p>{props.bucketListData.currentBucketDescription}</p> : <p className="description">No description</p> }
        </span>
        <button
          onClick={props.handleClick(props.id)}
          className='pull-right btn-primary add-button' href=''>Add Item</button>
        <button onClick={props.hideItems} className='pull-right  btn-default back-button'>Go Back</button>
      </span>
      <div>{props.bucketItems}</div>
    </div>
  );
};

export default SingleItem;
