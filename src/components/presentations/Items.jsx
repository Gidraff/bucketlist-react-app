import React from 'react';
import SingleItem from './SingleItem';
import { Glyphicon } from 'react-bootstrap';

const Items = (props) => {
  const { items, searchItems } = props.bucketListData;

  const ItemsSearched = searchItems && searchItems.length >= 1 ? 
    searchItems.map(item => {
      return (
        <div className="item-container" key={item.id}>
          {item.item_name}
          <span className='item-buttons-container'>
            <Glyphicon glyph="pencil" onClick={props.handleEdit(item.id)}className='item-button' />
            <Glyphicon glyph="trash" onClick={props.handleDeleteClick(item.id)} className='item-button' />
          </span>
        </div>
      );
    }) : <div>No items found</div>;

  const bucketItems = items.map((item) => {
    if(props.id === item.bucketlist_id){
      return(
        <div className='item-container' key={item.id}>
          {item.item_name}
          <span className='item-buttons-container'>
            <Glyphicon glyph="pencil" onClick={props.handleEdit(item.id)}className='item-button' />
            <Glyphicon glyph="trash"  onClick={props.handleDeleteClick(item.id)} className='item-button' />
          </span>
        </div>
      );
    }
  });
  return (
    <div>
      <SingleItem
        bucketListData={props.bucketListData}
        items={items}
        hideItems={props.hideItems}
        id={props.id}
        bucketItems={props.bucketListData.showSearchItem ? ItemsSearched : bucketItems}
        handleClick={props.handleClick}/>
    </div>
  );
};

export default Items;
