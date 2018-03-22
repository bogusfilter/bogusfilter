/**
 * Constants that are reused throughout the app.
 * utils/constants.js
 */

const isProduction = process.env.NODE_ENV || 'local';
const apiKey = process.env.BOGUS_FILTER_API_KEY;

if (!apiKey) {
  console.error('\n------------------------------------------------------------------');
  console.error('BOGUS FILTER');
  console.error('WARNING: Environment variable BOGUS_FILTER_API_KEY not found.')
  console.error('------------------------------------------------------------------\n');
}

export {
  isProduction,
  apiKey,
};
