import axios from 'axios';
import store from '../store/configureStore';

const url = 'https://real-bucketlist-api.herokuapp.com/';

const instance = axios.create({
  baseURL: url,
  timeout: 10000,
  headers: {
    Accept: 'application/json',
    ContentType: 'application/json',
  },
});

instance.interceptors.request.use((config) => {
  const { token } = store.getState().auth;
  if (token) {
    config.headers.authorization = `${token}`;
  }
  config.headers['Access-Control-Allow-Origin'] = '*';
  return config;
});

export default instance;
