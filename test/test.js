'use strict';

/**
 * test/test.js
 * The main tests for Bogus Filter
 */
var expect = require('chai').expect;
var dotenv = require('dotenv');
var path = require('path');
var bogusfilter = require('../index');
var dotenvConfig = dotenv.config({
  path: path.resolve(process.cwd(), '.env.example')
});

describe('#bogusfilter environment variables', function() {
    it('should not have any errors', function() {
        var result = dotenvConfig.error;
        expect(result).to.equal(undefined);
    });
    it('should be an object', function() {
        var result = dotenvConfig.parsed;
        expect(result).to.be.an('object');
    });
    it('should have property BOGUS_FILTER_API_KEY', function() {
        var result = dotenvConfig.parsed;
        expect(result).to.have.property('BOGUS_FILTER_API_KEY');
    });
    it('should be demo user', function() {
        var result = dotenvConfig.parsed;
        const demoUser = { BOGUS_FILTER_API_KEY: '0A7fSh0qSrul1c60fGygCRhFYnqEijzB' };
        expect(result).to.deep.equal(demoUser);
    });
});

describe('#bogusfilter', function() {
    it('should be available', function(done) {
        bogusfilter.status()
        .then(function(res){
          const response = {
            available: true,
          };
          expect(res).to.have.property('available');
          expect(res.available).to.eql(true);
          done();
        })
        .catch(function(err){
          expect(err).to.eql(undefined);
          done();
        });
    });
    it('should run the check command with yep.it', function(done) {
      bogusfilter.check('email', 'yep.it', true)
      .then(function(res){
        const response = {
          bogus: true,
        };
        expect(res).to.have.property('bogus');
        expect(res.bogus).to.eql(true);
        done();
      })
      .catch(function(err){
        expect(err).to.eql(undefined);
        done();
      });
    });
    it('should run the check command with nope.it', function(done) {
      bogusfilter.check('email', 'nope.it')
      .then(function(res){
        const response = {
          bogus: false,
        };
        expect(res).to.have.property('bogus');
        expect(res.bogus).to.eql(false);
        done();
      })
      .catch(function(err){
        expect(err).to.eql(undefined);
        done();
      });
    });
});
