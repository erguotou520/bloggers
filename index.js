var App = require('ghost-app'),
  router = require('express').Router(),
  MyApp,
  _app;

MyApp = App.extend({
  install: function () {
    console.log("bloggers installed");
  },
  uninstall: function () {
    console.log("bloggers uninstalled");
  },
  activate: function () {
    _app = this.app;
    console.log("bloggers now activated");
    router.get('/bloggers', function(req, res) {
      res.render('bloggers');
    });
  },
  deactivate: function () {
    console.log("sorry bloggers deactivated");
  }
});

module.exports = MyApp;