Package.describe({
  name: 'iron:middleware-stack',
  summary: 'Client and server middleware support inspired by Connect.',
  version: '1.0.11',
  git: 'https://github.com/iron-meteor/iron-middleware-stack'
});

Package.on_use(function (api) {
  api.versionsFrom('METEOR@0.9.2');

  api.use('underscore');
  api.use('ejson');

  api.use('iron:core@1.0.11');
  api.imply('iron:core');

  api.use('iron:url@1.0.11');

  api.add_files('lib/handler.js');
  api.add_files('lib/middleware_stack.js');
  api.export('Handler', {testOnly: true});
});

Package.on_test(function (api) {
  api.use('iron:middleware-stack');
  api.use('tinytest');
  api.use('test-helpers');
  api.add_files('test/handler_test.js');
  api.add_files('test/middleware_stack_test.js');
});
