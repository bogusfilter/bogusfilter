/**
 * Constants that are reused throughout the app.
 * utils/constants.js
 */
const isProduction = process.env.NODE_ENV || 'local';
if (!isProduction) {
  const dotenv = require('dotenv').load();
}
const apiKey = process.env.BOGUS_FILTER_API_KEY || console.error('BOGUS_FILTER_API_KEY environment variable NOT found.');
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
