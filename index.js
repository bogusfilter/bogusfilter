'use strict';

/**
 * Bogus Filter
 * helps you protect your application by suggesting, and if you choose,
 * blocking data input by bots, spammers, competition and whoever else you choose.
 * https://www.bogusfilter.com
 *
 * index.js
 *
 * Documentation
 * @see https://docs.bogusfilter.com
 */
var Promise = require('bluebird');
var request = require('./utils/request');
var constants = require('./utils/constants');
var tools = require('./utils/tools');

module.exports = {
  /**
   * getKey
   * Returns the API key currently being used.
   * @param {void}
   * @return {string}
   */
  getKey: function() {
    return process.env.BOGUS_FILTER_API_KEY;
  },
  /**
   * status
   * Checks the status of the service
   * @param {void}
   * @return {Promise}
   */
  status: function() {
    return new Promise(function(resolve, reject) {
      const url = constants.endpoint + '/status';
      request.get(url)
      .then(function(res){
        resolve(res.data);
      })
      .catch(function(err){
        console.error(err);
        reject(err);
      })
    });
  },
  /**
   * activity
   * Gets a list of acitivity data that is used for the client dashboard.
   * @param {string} category The category that the filter is in.
   * @param {boolean} useExtras Whether or not to use Bogus Filter extras.
   * @return {Promise}
   */
  activity: function(category, useExtras = false) {
    return new Promise(function(resolve, reject) {
      const url = constants.endpoint + '/filters/activity/' + category + '/' + useExtras;
      request.get(url)
      .then(function(res){
        resolve(res.data);
      })
      .catch(function(err){
        console.error(err);
        reject(err);
      })
    });
  },
  /**
   * check
   * Handles checking some entered content.
   * @param {string} category The category that the filter is in.
   * @param {string} content The content to check for bogusness.
   * @param {boolean} useExtras Whether or not to use Bogus Filter extras.
   * @return {Promise}
   */
  check: function(category, content, useExtras = false) {
    return new Promise(function(resolve, reject) {
      const url = constants.endpoint + '/filters/check/' + category + '/' + content + '/' + useExtras;
      request.get(url)
      .then(function(res){
        resolve(res.data);
      })
      .catch(function(err){
        console.error(err);
        reject(err);
      })
    });
  },
  /**
   * view
   * Handles returning more info about a filter.
   * @param {string} category The category that the filter is in.
   * @param {string} content The content to check for bogusness.
   * @return {Promise}
   */
  view: function(category, content) {
    return new Promise(function(resolve, reject) {
      const url = constants.endpoint + '/filters/view/' + category + '/' + content;
      request.get(url)
      .then(function(res){
        resolve(res.data);
      })
      .catch(function(err){
        console.error(err);
        reject(err);
      })
    });
  },
  /**
   * add
   * Handles adding a filter.
   * @param {string} category The category that the filter is in.
   * @param {string} data The filter data to add.
   * {
   *   title: 'Example Title',
   *   content: 'example',
   *   description: 'Example description',
   * }
   * @return {Promise}
   */
  add: function(category, data) {
    return new Promise(function(resolve, reject) {
      const url = constants.endpoint + '/filters/add/' + category;
      request.post(url, data)
      .then(function(res){
        resolve(res.data);
      })
      .catch(function(err){
        console.error(err);
        reject(err);
      })
    });
  },
  /**
   * remove
   * Handles removing a filter.
   * @param {string} category The category that the filter is in.
   * @param {string} id The filter to remove.
   * @return {Promise}
   */
  remove: function(category, id) {
    return new Promise(function(resolve, reject) {
      const url = constants.endpoint + '/filters/remove/' + id;
      request.delete(url)
      .then(function(res){
        resolve(res.data);
      })
      .catch(function(err){
        console.error(err);
        reject(err);
      })
    });
  },
  /**
   * categories
   * Handles fetching categories from the API
   * @param {boolean} list Whether to return data as a list. Useful for <select>s
   * @return {Promise}
   */
  categories: function(list = false) {
    return new Promise(function(resolve, reject) {
      let url = constants.endpoint;
      if (list) {
        url += '/users/categories/list'
      } else {
        url += '/users/categories'
      }
      request.get(url)
      .then(function(res){
        resolve(res.data);
      })
      .catch(function(err){
        console.error(err);
        reject(err);
      })
    });
  },
  /**
   * groupCategories
   * Handles fetching categories for the groups from the API
   * @param {boolean} list Whether to return data as a list. Useful for <select>s
   * @return {Promise}
   */
  groupCategories: function(list = false) {
    return new Promise(function(resolve, reject) {
      let url = constants.endpoint;
      if (list) {
        url += '/users/group-categories/list'
      } else {
        url += '/users/group-categories'
      }
      request.get(url)
      .then(function(res){
        resolve(res.data);
      })
      .catch(function(err){
        console.error(err);
        reject(err);
      })
    });
  },
  /**
   * groups
   * Handles fetching groups from the API
   * @param {boolean} list Whether to return data as a list. Useful for <select>s
   * @return {Promise}
   */
  groups: function(list = false) {
    return new Promise(function(resolve, reject) {
      let url = constants.endpoint;
      if (list) {
        url += '/users/groups/list'
      } else {
        url += '/users/groups'
      }
      request.get(url)
      .then(function(res){
        resolve(res.data);
      })
      .catch(function(err){
        console.error(err);
        reject(err);
      })
    });
  },
}
