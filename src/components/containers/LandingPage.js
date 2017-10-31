import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Navigation } from "../presentations/Navigation";
import * as actions from "../../actions/UserActions";
import {searchBucket, searchChange} from "../../actions/bucketListActions";
import Footer from "../presentations/Footer";
import { Redirect } from 'react-router';
import { WelcomeText } from "../presentations/WelcomeText";
import LoginPage from "./LoginPage";
import RegisterPage from "./RegisterPage";
import DashBoard from "./DashBoard";


class LandingPage extends Component{
  constructor(props) {
    super(props);
    this.state = {
        search: ""
      }
    }

  onSearchChange = (e) => {
    e.preventDefault();
    let search_value = e.target.value;
    if (search_value){
      this.setState({search: search_value.substr(0, 20)})
      this.props.searchBucket(e.target.value);
    }
    this.props.searchChange();
  }

  handleLogOut = (e) => {
    this.props.logoutUser();
    localStorage.clear()
    return (

      <Redirect to="/LoginPage" />
    )

  };

  render() {
    return (
        <div>
        <Router>
          <div>
            <Navigation 
              search={this.state.search}
              onSearchChange={this.onSearchChange}
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
    userDetails: state.auth,
    bucketsData: state.buckets
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logoutUser: () => dispatch(actions.logoutUser()),
    searchBucket: (searchData) => dispatch(searchBucket(searchData)),
    searchChange: () => dispatch(searchChange())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);
