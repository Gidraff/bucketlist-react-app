import React, { Component } from 'react';
import { render } from 'react-dom';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import *  as actions from '../../actions/UserActions'
import  { clearState }from '../../actions/bucketListActions';
import { UnAuthenticatedNav, AuthenticatedNav } from "../presentations/Navs";


class Navigation extends Component{
  constructor(props){
    super(props);
  }

  componentWillUnmount(){
    this.props.clearState();
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
        <AuthenticatedNav handleLogout={this.handleLogout} /> :
         <UnAuthenticatedNav />}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userDetails: state.auth
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logoutUser: () => dispatch(actions.logoutUser()),
    clearState: () => dispatch(clearState())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);


