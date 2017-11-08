import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import Routes from './routes';
import './index.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import store from './store/configureStore';
import { persistStore } from 'redux-persist';

export default class AppProvider extends Component {
  constructor() {
    super();
    this.state = {
      rehydrated: false
    };
  }

  componentWillMount() {
    persistStore(store, {}, () => {
      this.setState({
        rehydrated: true
      });
    });
  }

  render() {
    if (!this.state.rehydrated) {
      return <div> Loading... </div>;
    }
    return (
      <MuiThemeProvider>
        <Provider store={store}>
          <Routes />
        </Provider>
      </MuiThemeProvider>
    );
  }

}

render(
  <AppProvider />, document.getElementById('root')
);



