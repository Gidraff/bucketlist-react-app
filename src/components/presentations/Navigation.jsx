import React from "react";
import { Link } from "react-router-dom";

export const Navigation = (props) => {
  if(props.isLoggedIn){
    return (
      <nav className="link-containers clearfix">
        <ul className="navigation-list">
          <li><p onClick={props.handleLogOut}>Logout</p></li>
        </ul>
      </nav>
    );
  }else {
    return (
      <nav className="link-containers clearfix">
        <ul className="navigation-list">
          <li >
            <Link to="/RegisterPage" >
                        Register
            </Link>
          </li>
          <li><Link to="/" >Home</Link></li>
          <li >
            <Link to="/LoginPage" >
                        Login
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
};
