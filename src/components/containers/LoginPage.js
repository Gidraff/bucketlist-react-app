import React, { Component } from 'react';
import LoginForm    from '../presentations/LoginForm'
import { connect }  from 'react-redux';
import * as actions from '../../actions/UserActions'
import { Redirect } from 'react-router';
import DashBoard    from './DashBoard';

class LoginPage extends Component{
  constructor(props){
    super(props);
    this.state = {
      loginData: {
        email: "",
        password: ""
      }
    }
  }
  onChange = (e) => {
    let { loginData } = this.state;
    loginData[e.target.name] = e.target.value;
    this.setState(loginData);
  }
  onSubmit = (e) => {
    e.preventDefault();
    const loginDetails = {
      email: this.state.loginData.email,
      password: this.state.loginData.password
    }
    this.props.loginUser(loginDetails);
    this.setState(this.state.loginData)

  }
  renderDashBoard(){
    return(
      <div>
        <DashBoard />
      </div>
    );
  };

  renderLoginForm() {
    return (
       <div>
        <LoginForm
          onSubmit={this.onSubmit}
          onChange={this.onChange}
          loginData={this.state.loginData}
        />
      </div>
    )
  };

  render(){
    return (
      <div>
      {this.props.userDetails.isLoggedIn ? this.renderDashBoard() : this.renderLoginForm()}
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    userDetails: state.auth
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    loginUser: (loginDetails) => dispatch(actions.loginUser(loginDetails))
  }
}
export default  connect(mapStateToProps, mapDispatchToProps)(LoginPage);
