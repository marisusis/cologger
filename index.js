var colors = require('colors');
var log = require('util').log;

module.exports = {
  error: function(s) {
    log(String(s).red.bold);
  },
  warn: function(s) {
    log(String(s).yellow.bold);
  },
  info: function(s) {
    log(String(s).blue.bold);
  },
  ok: function(s) {
    log(String(s).green.bold);
  }
}