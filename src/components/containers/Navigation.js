import React, { Component }  from 'react';
import { render }            from 'react-dom';
import { Redirect }          from 'react-router-dom';
import { connect }           from 'react-redux';
import *  as actions         from '../../actions/UserActions'
import  { clearState, 
          searchBucket, 
          searchBucketItems,
          setSearchItem,
          disableIsSearch,
          disableIsSearchItem,
          disableShowSearchItems }  from '../../actions/bucketListActions';
import { UnAuthenticatedNav, 
         AuthenticatedNav }     from "../presentations/Navs";


class Navigation extends Component{
  constructor(props){
    super(props);
    this.state = {
      searchItemData: '',
      searchBucketData: ''
    }
  }

  onSearchBucketChange = e => {
    e.preventDefault();
    if(e.target.value.length >= 1){
      this.props.searchBucket(e.target.value)
    }else {
      this.props.disableIsSearch();
    }
  }
  onSearchItemChange = e => {
    e.preventDefault();
    if(e.target.value.length >= 1){
      const { current_id } = this.props.bucketsData;
      this.props.searchBucketItems(current_id, e.target.value)
    }else {
      this.props.disableShowSearchItems();
    }
   
  }

  handleLogout = (e) => {
    this.props.clearState();
    localStorage.clear();
    this.props.logoutUser()
  };

  render(){
    return (
      <div>
        {this.props.userDetails.isLoggedIn  || this.props.userDetails.isRegistered ?  
        <AuthenticatedNav 
          onSearchBucketChange={this.onSearchBucketChange}
          onSearchItemChange={this.onSearchItemChange}
          handleLogout={this.handleLogout} 
          bucketsData={this.props.bucketsData} /> :
         <UnAuthenticatedNav />}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userDetails: state.auth,
    bucketsData: state.buckets
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logoutUser: () => dispatch(actions.logoutUser()),
    clearState: () => dispatch(clearState()),
    searchBucket: (searchBucketData) => dispatch(searchBucket(searchBucketData)),
    searchBucketItems: (id, searchItemData) => dispatch(searchBucketItems(id, searchItemData)),
    disableIsSearch: () => dispatch(disableIsSearch()),
    disableIsSearchItem: () => dispatch(disableIsSearchItem()),
    setSearchItem: () => dispatch(setSearchItem()),
    disableShowSearchItems: () => dispatch(disableShowSearchItems())

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);


