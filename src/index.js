import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import Routes from './routes';
import './index.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import store from './store/configureStore';

render(
  <MuiThemeProvider>
    <Provider store={store}>
      <Routes />
    </Provider>
  </MuiThemeProvider> , document.getElementById('root'));
