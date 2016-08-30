/*
 * bad-factory.js
 */

// Still has issues with caching

var counter = require('./counter');

module.exports.create = function() {
    return counter;
};