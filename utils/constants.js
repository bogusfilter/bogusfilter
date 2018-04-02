/**
 * Constants that are reused throughout the app.
 * utils/constants.js
 */
let apiKey = process.env.BOGUS_FILTER_API_KEY;
const endpointSSL = 'https://api.bogusfilter.com/v1';
const endpoint = 'http://api.bogusfilter.com/v1';

// Try to load the bogus.json file with the key.
if (!apiKey) {
  const fs = require('fs');
  const path = require('path');
  let bogusFile;
  try {
    bogusFile = path.resolve(process.cwd(), 'bogus.json');
  } catch(err) {
    console.error(err);
  }
  if (bogusFile) {
    let fileContent;
    try {
      fileContent = fs.readFileSync(bogusFile);
    } catch (err) {
      console.error(err);
    }
    let parsedJSON;
    try {
      parsedJSON = JSON.parse(fileContent);
      apiKey = parsedJSON.key;
      process.env.BOGUS_FILTER_API_KEY = apiKey;
    } catch (err) {
      console.error(err);
    }
  }
}

if (!apiKey) {
  console.error('\n---------------------------------------------------------------------------------------');
  console.error('BOGUS FILTER');
  console.error('WARNING: Neither an environment variable (BOGUS_FILTER_API_KEY) or bogus.json were found.')
  console.error('---------------------------------------------------------------------------------------\n');
}

module.exports = {
  apiKey,
  endpoint,
  endpointSSL,
};
