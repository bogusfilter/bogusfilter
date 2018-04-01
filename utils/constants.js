/**
 * Constants that are reused throughout the app.
 * utils/constants.js
 */
const isProduction = process.env ? process.env.NODE_ENV : false;
if (!isProduction) {
  const dotenv = require('dotenv').load();
}
const apiKey = process.env ? process.env.BOGUS_FILTER_API_KEY : '';
if (!apiKey) {
  console.error('Unable to load the BOGUS_FILTER_API_KEY environment variable.');
}
const endpointSSL = 'https://api.bogusfilter.com/v1';
const endpoint = 'http://api.bogusfilter.com/v1';

if (!apiKey) {
  console.error('\n------------------------------------------------------------------');
  console.error('BOGUS FILTER');
  console.error('WARNING: Environment variable BOGUS_FILTER_API_KEY not found.')
  console.error('------------------------------------------------------------------\n');
}

module.exports = {
  isProduction,
  apiKey,
  endpoint,
  endpointSSL,
};
