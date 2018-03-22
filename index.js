'use strict';

/**
 * Bogus Filter
 * helps you protect your application by suggesting, and if you choose,
 * blocking data input by bots, spammers, competition and whoever else you choose.
 * https://www.bogusfilter.com
 *
 * index.js
 */
var Promise = require('bluebird');
var request = require('./utils/request');
var constants = require('./utils/constants');
var tools = require('./utils/tools');

module.exports = {
  check: function(content) {
    return content;
  }
}
