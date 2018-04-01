/**
 * Constants that are reused throughout the app.
 * utils/constants.js
 */
try {
  const isProduction = process.env && process.env.NODE_ENV ? true : false;
  if (isProduction) {
    const dotenv = require('dotenv').load();
  }
} catch (err) {
  console.error(err);
  return false;
}
const apiKey = process.env.BOGUS_FILTER_API_KEY;
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
