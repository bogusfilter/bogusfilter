/**
 * Constants that are reused throughout the app.
 * utils/constants.js
 */
const isProduction = window.process.env.NODE_ENV || 'local';
const apiKey = window.process.env.BOGUS_FILTER_API_KEY;
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
