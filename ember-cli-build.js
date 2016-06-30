/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    // Add options here
  });

  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.

    app.import('vendor/stylesheets/bootstrap/core/dist/css/bootstrap.min.css');
    app.import('vendor/stylesheets/bootstrap/select2/select2.css');
    app.import('vendor/stylesheets/bootstrap/datepicker/css/datepicker.css');
    app.import('vendor/stylesheets/bootstrap/fileupload/bootstrap-fileupload.min.css');
    app.import('vendor/stylesheets/bootstrap/typeahead/typeahead.min.css');
    app.import('vendor/stylesheets/bootstrap/colorpicker/css/colorpicker.css');
    app.import('vendor/stylesheets/bootstrap/timepicker/css/bootstrap-timepicker.min.css');
    app.import('vendor/stylesheets/font/fontawesome/css/font-awesome-patched.min.css');
    app.import('vendor/stylesheets/bootstrap-custom.css');
    app.import('vendor/stylesheets/bootstrap-extended.css');
    app.import('vendor/stylesheets/animate.min.css');
    app.import('vendor/stylesheets/helpers.css');
    app.import('vendor/stylesheets/base.css');
    app.import('vendor/stylesheets/dark-theme.css');
    app.import('vendor/stylesheets/mediaqueries.css');
    // // Helpers //
    app.import('vendor/javascripts/plugins/modernizr.min.js');
    app.import('vendor/javascripts/plugins/mobiledevices.js');
    // // jQuery core //
    // app.import('vendor/javascripts/libs/jquery-1.11.0.min.js');
    // app.import('vendor/javascripts/libs/jquery-ui-1.10.4.min.js');
    // // // Bootstrap //
    // app.import('vendor/stylesheets/bootstrap/core/dist/js/bootstrap.min.js');
    // app.import('vendor/stylesheets/bootstrap/select2/select2.min.js');
    // app.import('vendor/stylesheets/bootstrap/bootboxjs/bootboxjs.min.js');
    // app.import('vendor/stylesheets/bootstrap/holder/holder.min.js');
    // app.import('vendor/stylesheets/bootstrap/typeahead/typeahead.min.js');
    // app.import('vendor/stylesheets/bootstrap/datepicker/js/bootstrap-datepicker.min.js');
    // app.import('vendor/stylesheets/bootstrap/fileupload/bootstrap-fileupload.min.js');
    // app.import('vendor/stylesheets/bootstrap/inputmask/bootstrap-inputmask.min.js');
    // app.import('vendor/stylesheets/bootstrap/colorpicker/js/bootstrap-colorpicker.min.js');
    // app.import('vendor/stylesheets/bootstrap/timepicker/js/bootstrap-timepicker.min.js');

  return app.toTree();
};
