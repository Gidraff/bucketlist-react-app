import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import RegisterContainer from './components/containers/RegisterContainer';
import LoginContainer from './components/containers/LoginContainer';
import DashBoard from './components/containers/DashBoard';
import Navigation from './components/containers/Navigation';
import Footer from './components/presentations/Footer';
import PrivateRoute from './components/containers/PrivateRoute';


const Routes =  () => (
  <BrowserRouter >
    <div>
      <Navigation />
      <Route exact path='/' component={RegisterContainer} />
      <Route path='/login' component={LoginContainer} />
      <PrivateRoute  path='/dashboard' component={DashBoard}/>
      <Footer />
    </div>
  </BrowserRouter>
);

export default Routes;
