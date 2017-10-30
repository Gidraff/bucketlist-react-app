import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Navigation } from "../presentations/Navigation";
import * as actions from "../../actions/UserActions";
import Footer from "../presentations/Footer";
import { WelcomeText } from "../presentations/WelcomeText";
import LoginPage from "./LoginPage";
import RegisterPage from "./RegisterPage";
import DashBoard from "./DashBoard";


class LandingPage extends Component{
  constructor(props) {
    super(props);
  }

  handleLogOut = (e) => {
    this.props.logoutUser();
    localStorage.clear()
  };

  render() {
    return (
        <div>
        <Router>
          <div>
            <Navigation 
              isLoggedIn={this.props.userDetails.isLoggedIn}
              handleLogOut={this.handleLogOut}
            />
            <Route exact path="/" component={WelcomeText} />
            <Route path="/LoginPage" component={LoginPage} />
            <Route path="/RegisterPage" component={RegisterPage} />
            <Route path="/DashBoard" component={DashBoard} />
          </div>
        </Router>
        <Footer />
      </div>
    )
 };
};

const mapStateToProps = (state) => {
  return {
    userDetails: state.auth
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logoutUser: () => dispatch(actions.logoutUser())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);
