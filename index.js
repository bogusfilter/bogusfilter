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
      request
      .get(url)
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
   * @param {string} key The client API key.
   * @param {boolean} useExtras Whether or not to use Bogus Filter extras.
   * @return {Promise}
   */
  activity: function(category, key, useExtras) {
    if (!useExtras) {
      useExtras = false;
    }
    return new Promise(function(resolve, reject) {
      const url = constants.endpoint + '/filters/activity/' + category + '/' + useExtras;
      request
      .get(url)
      .set('X-API-Key', key)
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
   * apiCount
   * Gets the total API request count for a user.
   * @param {string} key The client API key.
   * @return {Promise}
   */
  apiCount: function(key) {
    return new Promise(function(resolve, reject) {
      const url = constants.endpoint + '/users/requests/api/count';
      request
      .get(url)
      .set('X-API-Key', key)
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
   * apiRequests
   * Gets the total API requests for a user.
   * @param {string} key The client API key.
   * @return {Promise}
   */
  apiRequests: function(key) {
    return new Promise(function(resolve, reject) {
      const url = constants.endpoint + '/users/requests/api';
      request
      .get(url)
      .set('X-API-Key', key)
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
   * bogusCount
   * Gets the total bogus results for a user.
   * @param {string} key The client API key.
   * @return {Promise}
   */
  bogusCount: function(key) {
    return new Promise(function(resolve, reject) {
      const url = constants.endpoint + '/users/requests/bogus';
      request
      .get(url)
      .set('X-API-Key', key)
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
   * @param {string} key The client API key.
   * @param {boolean} useExtras Whether or not to use Bogus Filter extras.
   * @return {Promise}
   */
  check: function(category, content, key, useExtras) {
    if (!useExtras) {
      useExtras = false;
    }
    return new Promise(function(resolve, reject) {
      const url = constants.endpoint + '/filters/check/' + category + '/' + content + '/' + useExtras;
      request
      .get(url)
      .set('X-API-Key', key)
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
   * @param {string} key The client API key.
   * @return {Promise}
   */
  view: function(category, content, key) {
    return new Promise(function(resolve, reject) {
      const url = constants.endpoint + '/filters/view/' + category + '/' + content;
      .get(url)
      .set('X-API-Key', key)
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
   * recentFilters
   * Handles returning a certain number of recent filters.
   * @param {string} perPage The content to check for bogusness.
   * @param {string} key The client API key.
   * @return {Promise}
   */
  recentFilters: function(perPage, page, key) {
    if (!perPage) perPage = 5;
    if (!page) page = 1;
    return new Promise(function(resolve, reject) {
      const url = constants.endpoint + '/users/filters/recent?page=' + page + '&perPage=' + perPage;
      .get(url)
      .set('X-API-Key', key)
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
   * globalFilters
   * Handles returning a certain number of global filters.
   * @param {string} perPage The content to check for bogusness.
   * @param {string} key The client API key.
   * @return {Promise}
   */
  globalFilters: function(perPage, key) {
    return new Promise(function(resolve, reject) {
      const url = constants.endpoint + '/users/filters/recent?perPage=' + perPage + '&global=true';
      .get(url)
      .set('X-API-Key', key)
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
   * @param {string} data The filter data to add.
   * {
   *   group: 'Example Group',
   *   category: 'Example Category',
   *   title: 'Example Title',
   *   content: 'example',
   *   description: 'Example description',
   * }
   * @param {string} key The client API key.
   * @return {Promise}
   */
  add: function(data, key) {
    return new Promise(function(resolve, reject) {
      const url = constants.endpoint + '/filters/add';
      // request.defaults.headers.common['X-API-Key'] = key;
      request
      .post(url, data)
      .set('X-API-Key', key)
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
   * @param {string} id The filter to remove.
   * @param {string} key The client API key.
   * @return {Promise}
   */
  remove: function(id, key) {
    return new Promise(function(resolve, reject) {
      const url = constants.endpoint + '/filters/remove/' + id;
      // request.defaults.headers.common['X-API-Key'] = key;
      request
      .delete(url)
      .set('X-API-Key', key)
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
   * @param {string} key The client API key.
   * @return {Promise}
   */
  categories: function(list, key) {
    if (!list) {
      list = false;
    }
    return new Promise(function(resolve, reject) {
      var url = constants.endpoint;
      if (list) {
        url += '/users/categories/list';
      } else {
        url += '/users/categories';
      }
      // request.defaults.headers.common['X-API-Key'] = key;
      request
      .get(url)
      .set('X-API-Key', key)
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
   * @param {string} key The client API key.
   * @return {Promise}
   */
  groupCategories: function(list, key) {
    if (!list) {
      list = false;
    }
    return new Promise(function(resolve, reject) {
      var url = constants.endpoint;
      if (list) {
        url += '/users/group-categories/list';
      } else {
        url += '/users/group-categories';
      }
      // request.defaults.headers.common['X-API-Key'] = key;
      // request.defaults.withCredentials = false;
      request
      .get(url)
      .set('X-API-Key', key)
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
   * @param {string} key The client API key.
   * @return {Promise}
   */
  groups: function(list, key) {
    if (!list) {
      list = false;
    }
    return new Promise(function(resolve, reject) {
      var url = constants.endpoint;
      if (list) {
        url += '/users/groups/list';
      } else {
        url += '/users/groups';
      }
      // request.defaults.headers.common['X-API-Key'] = key;
      request
      .get(url)
      .set('X-API-Key', key)
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
