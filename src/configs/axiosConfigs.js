import axios from 'axios';
import store from '../store/configureStore';

const url = 'http://127.0.0.1:5000/';

const instance = axios.create({
  baseURL: url,
  timeout: 5000,
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
