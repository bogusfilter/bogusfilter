/**
 * Handles making requests to the Bogus Filter API.
 * utils/request.js
 */
const axios = require('axios');
const https = require('https');
const constants = require('./constants');

// @see https://github.com/mzabriskie/axios/issues/876
axios.defaults.withCredentials = true;

const axiosInstance = axios.create({
  baseURL: constants.endpoint,
  timeout: constants.endpointTimeout,
  // `httpAgent` and `httpsAgent` define a custom agent to be used when performing http
  // and https requests, respectively, in node.js. This allows options to be added like
  // `keepAlive` that are not enabled by default.
  // httpAgent: new http.Agent({ keepAlive: true }),
  httpsAgent: new https.Agent({ keepAlive: true }),
  /* other custom settings */
});

module.exports = axiosInstance;
