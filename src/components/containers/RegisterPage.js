import React, { Component } from 'react';
import RegisterForm from '../presentations/RegisterForm';
import { connect } from 'react-redux';
import *  as actions from '../../actions/UserActions'
import { Redirect } from 'react-router';


class RegisterPage extends Component{
  constructor(props) {
    super(props);
    this.state = {
      signUpData: {
        username: "",
        email: "",
        password: "",
        confirm: ""
      }
    }
  }

    onChange = (event) => {
      let { signUpData } = this.state;
      signUpData[event.target.name] = event.target.value;
      this.setState(signUpData);
      console.log("this is data",signUpData)}

    onSubmit = (event) => {
      event.preventDefault();
      const {password, confirm} = this.state.signUpData;
      if ( password === confirm) {
        const user = {
          username: this.state.signUpData.username,
          email: this.state.signUpData.email,
          password: this.state.signUpData.password
        }
        this.props.registerUser(user)

      }else {
        this.props.noMatch();
      }

    }


    render() {
      const { error } = this.props.userDetails
      const { isRegistered } = this.props.userDetails;

      if(isRegistered) {
        return <Redirect to='/LoginPage' />
      }
      return(
        <div>
          <RegisterForm
            error={ error }
            signUpData={this.state.signUpData}
            onChange={this.onChange}
            onSubmit={this.onSubmit}/>
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
    registerUser: (user) => dispatch(actions.registerUser(user)),
    noMatch: () => dispatch(actions.noMatch())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterPage);
