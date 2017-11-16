import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import *  as actions from '../../actions/UserActions'
import LoginForm from '../presentations/LoginForm';


class LoginContainer extends Component{
  constructor(props) {
    super(props);
    this.state = {
      loginData: {
        email: '',
        password: ''
      }
    }
  }

  onLoginChange = (e) => {
    let { loginData } = this.state;
    loginData[e.target.name] = e.target.value;
    this.setState(loginData);
  }

  onLoginSubmit = (e) => {
    e.preventDefault();
    const loginDetails = {
      email: this.state.loginData.email,
      password: this.state.loginData.password
    }
    this.props.loginUser(loginDetails);
    if(this.props.userDetails.loginStatus === 200){
        this.props.resetRedirectToReferrer();

    }
  }

  render(){
    const { from } = this.props.location.state || { from: {pathname: "/dashboard"}}
    const { redirectToReferrer } = this.props.userDetails;

    if(redirectToReferrer){
      return(
        <Redirect to={from} />
      )
    }
    return(
      <div>
        <LoginForm
          onLoginSubmit={this.onLoginSubmit}
          onLoginChange={this.onLoginChange}
          loginData={this.state.loginData}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    return {
        userDetails: state.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
      loginUser: (loginDetails) => dispatch(actions.loginUser(loginDetails)),
      resetRedirectToReferrer: () => dispatch(actions.resetRedirectToReferrer())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
