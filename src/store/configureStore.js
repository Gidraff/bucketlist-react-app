import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import { persistStore, autoRehydrate } from 'redux-persist';
import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';
import rootReducer from '../reducers/index';

const store = createStore(
  rootReducer,
  applyMiddleware(thunk, promiseMiddleware(), createLogger()),
  autoRehydrate()
);
persistStore(store);
export default store;
