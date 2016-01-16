var colors = require('colors');
var log = require('util').log;

module.exports = {
  error: function(s) {
    log(String(s).red.bold);
  }
}