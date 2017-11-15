import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import RegisterForm from '../presentations/RegisterForm';
import { connect } from 'react-redux';
import *  as actions from '../../actions/UserActions'

class RegisterContainer extends Component{
  constructor(props) {
    super(props);
    this.state = {
      signUpData: {
        username: '',
        email: '',
        password: '',
        confirm: ''
      },
      invalidInput: false,
      redirectToReferrer: false

    }
  }

  onSignUpChange = (event) => {
    let { signUpData } = this.state;
    signUpData[event.target.name] = event.target.value;
    this.setState(signUpData);
  }

  onSignUpSubmit = (event) => {
    event.preventDefault();
    let input = document.getElementsByName('password')
    const {password, confirm} = this.state.signUpData;
    if ( password === confirm) {
      const user = {
        username: this.state.signUpData.username,
        email: this.state.signUpData.email,
        password: this.state.signUpData.password
      }
      this.props.registerUser(user)
      this.setState({
        redirectToReferrer: true
      })
    }
  }

    render() {

      const { from } = this.props.location.state || { from: {pathname: "/dashboard"}}
      const { redirectToReferrer } = this.state;

      if(redirectToReferrer){
        return(
          <Redirect to={from} />
        )
      }
      return(
        <div>
          <RegisterForm
            signUpData={this.state.signUpData}
            onSignUpChange={this.onSignUpChange}
            onSignUpSubmit={this.onSignUpSubmit}/>
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
    registerUser: (user) => dispatch(actions.registerUser(user))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterContainer);
