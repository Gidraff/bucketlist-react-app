import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const  PrivateRoute = ({ component: Component, userDetails, ...rest}) => {
  const { token, isRegistered, isLoggedIn } = userDetails;
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
};

function mapStateToProps(state) {
  /* subscribe to the store to receive props*/
  return {
    userDetails: state.auth,
  };
}
export default connect(mapStateToProps)(PrivateRoute);
