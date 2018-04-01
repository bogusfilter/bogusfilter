/**
 * Constants that are reused throughout the app.
 * utils/constants.js
 */
if (!process.env) {
  console.error('Unable to react process.env.');
  return false;
}
const isProduction = process.env.NODE_ENV || 'local';
const apiKey = process.env.BOGUS_FILTER_API_KEY || console.error('Unable to load BOGUS_FILTER_API_KEY environment variable.');
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
