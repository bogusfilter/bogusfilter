'use strict';

/**
 * test/test.js
 * The main tests for Bogus Filter
 */
var expect = require('chai').expect;
var bogusfilter = require('../index');

describe('#bogusfilter', function() {
    it('should run the check command', function() {
        var result = bogusfilter.check('data');
        expect(result).to.equal('data');
    });
});
