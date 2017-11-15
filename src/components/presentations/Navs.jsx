import React from  'react';
import { Link } from 'react-router-dom';

export const AuthenticatedNav = (props) => {
  return (
    <nav className="link-containers clearfix" >
      <ul className="navigation-list">
        <li>
          <input
            type="text"
            onChange={props.bucketsData.isSearchItem ?
              props.onSearchItemChange : props.onSearchBucketChange}
            className="search-bar" placeholder="Search..."/></li>
        <li><Link  onClick={props.handleLogout} to="/login">Logout</Link></li>
      </ul>
    </nav>
  );
};
  
export const UnAuthenticatedNav = () => {
  return (
    <nav className="link-containers clearfix" >
      <ul className="navigation-list">
        <li><Link to="/">Register</Link></li>
        <li ><Link  to="/login" >Login</Link></li>
      </ul>
    </nav>
  );
};