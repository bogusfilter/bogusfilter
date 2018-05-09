/**
 * Handles making external requests that aren't to the Bogus Filter API.
 * utils/request-external.js
 */
const axios = require('axios');
const https = require('https');

const axiosInstanceExt = axios.create({
  // `httpAgent` and `httpsAgent` define a custom agent to be used when performing http
  // and https requests, respectively, in node.js. This allows options to be added like
  // `keepAlive` that are not enabled by default.
  // httpAgent: new http.Agent({ keepAlive: true }),
  httpsAgent: new https.Agent({ keepAlive: true }),
  /* other custom settings */
});

module.exports = axiosInstanceExt;
