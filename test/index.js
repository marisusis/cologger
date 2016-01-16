var should = require('chai').should(),
  clog = require('../index'),
  error = clog.error,
  warn = clog.warn,
  info = clog.info,
  ok = clog.ok,
  dep = clog.depreceated;
error('Error');
info('Info');
warn('Warn');
ok('Success');
dep('Depreceated');