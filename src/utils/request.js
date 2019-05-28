import axios from 'axios';
import { Message } from 'element-ui';
import store from '@/store';
import { getToken } from '@/utils/auth';

// create an axios instance
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  withCredentials: true, // send cookies when cross-domain requests
  timeout: 5000, // request timeout
});

// request interceptor
service.interceptors.request.use(
  (config) => {
    if (store.getters.token) {
      config.headers.xxl_sso_sessionid = getToken();
    }
    return config;
  },
  error => Promise.reject(error),
);

// response interceptor
service.interceptors.response.use(
  response => response.data,
  (error) => {
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000,
    });
    return Promise.reject(error);
  },
);

export default service;
