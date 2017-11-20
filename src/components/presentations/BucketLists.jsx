import React from 'react';
import Bucket from './Bucket';
import { Glyphicon } from 'react-bootstrap';


const BucketList = (props) => {
  const { bucketlists } = props.bucketlistsData;
  const { searchBuckets } = props.bucketlistsData;

  const listItems = bucketlists.map(bucket => (
    <div className="list-item" key={bucket.id}>
      <a href="#" onClick={props.showItems({ id :bucket.id, title:bucket.title, description: bucket.description})} > {bucket.title} </a>
      <Glyphicon glyph="trash" className="form-button" onClick={props.handleDeleteClick(bucket.id)} />
      <Glyphicon
        glyph="pencil"
        className="form-button"
        onClick={props.handleClick({id: bucket.id, title: bucket.title, description: bucket.description})} />
    </div>
  ));

  const searchItems = searchBuckets && searchBuckets.length >= 1  ?  searchBuckets.map(bucket => (
    <div className="list-item" key={bucket.id}>
      <a href="#" onClick={props.showItems({ id :bucket.id, title:bucket.title, description:bucket.description})} >{bucket.title}</a>
      <Glyphicon  glyph="trash" className="form-button" onClick={props.handleDeleteClick(bucket.id)} />
      <Glyphicon  glyph="pencil" className="form-button" onClick={props.handleClick({ id :bucket.id, title:bucket.title, description: bucket.description})} />
    </div>
  )): <div>It seems you have no bucket matching your search </div> ;

  if (listItems.length < 1) {
    return (
      <div className="empty-container">
        <h4>No buckets available</h4>
      </div>
    );
  }

  const handlePages = (url, e) => {
    e.preventDefault();
    props.getBucketsPages(url);
  };
  console.log();
  return (
    <div className="list-container">
      <h6 className="header-title header-text">Bucket Lists
        {props.bucketlistsData.pages > 1
          ?
          <span className="pages-buttons clearfix">
            <button
              className={props.bucketlistsData.prevPage ? 'prev-page' : 'no-prev-page'}
              onClick={(e) => handlePages(props.bucketlistsData.prevPage, e)}
              disabled={
                props.bucketlistsData.prevPage.length <= 1
                  ?
                  true
                  :
                  false}
            >Prev</button>
            <button
              className={props.bucketlistsData.nextPage ? 'next-page' : 'no-next-page'}
              onClick={(e) => handlePages(props.bucketlistsData.nextPage, e)}
              disabled={
                props.bucketlistsData.nextPage.length <= 1
                  ?
                  true
                  :
                  false}
            >Next</button>
          </span>
          :
          null}
      </h6>
      <Bucket
        listItems={props.bucketlistsData.isSearch ? searchItems : listItems } />
    </div>

  );
};

export default BucketList;
