/**
 * Handles making requests to the Bogus Filter API.
 * utils/request.js
 */
const axios = require('axios');
const constants = require('./constants');

// @see https://github.com/mzabriskie/axios/issues/876
axios.defaults.withCredentials = true;
try {
  axios.defaults.headers.common['X-API-Key'] = constants.apiKey;
} catch (err) {
  // Handle the error
  console.error(err);
}

// axios.interceptors.request.use(config => {
//   config;
// }, error => {
//   Promise.reject(error);
// });
//
// axios.interceptors.response.use(response => {
//   response;
// }, error => {
//   console.log(error);
//   return Promise.reject(error);
// });

module.exports = axios;
