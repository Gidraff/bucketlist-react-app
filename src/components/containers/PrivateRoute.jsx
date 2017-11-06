import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

function PrivateRoute(props) {
  const { token, isRegistered, isLoggedIn } = props.userDetails;
  const { component: Component, ...rest } = props;
  return (
    <Route
      {...rest}
      render={(props) => 
        token && (isRegistered || isLoggedIn) === true ?
          <Component {...props} />
          : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
      }
    />
  );
}

function mapStateToProps(state) {
  /* subscribe to the store to receive props*/
  return {
    userDetails: state.auth,
  };
}
export default connect(mapStateToProps)(PrivateRoute);
