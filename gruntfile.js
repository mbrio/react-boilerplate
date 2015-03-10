'use strict';

module.exports = function (grunt) {
  grunt.loadNpmTasks('grunt-webpack');
  grunt.loadNpmTasks('grunt-contrib-clean');

  var environment = process.env.NODE_ENV || 'development';
  var webpackConfig = require('./webpack.' + environment + '.config.js');

  grunt.initConfig({
    webpack: {
      config: webpackConfig,
      stats: {
        colors: true
      }
    },
    clean: {
      build: ['build']
    }
  });

  grunt.registerTask('build:js', [
    'webpack'
  ]);

  grunt.registerTask('build', [
    'build:js'
  ]);

  grunt.registerTask('default', ['continuous']);

  grunt.registerTask('continuous', ['server'])

  grunt.registerTask('server', function () {
    var done = this.async();
    var webpack = require('webpack');
    var WebpackDevServer = require('webpack-dev-server');
    var host = '0.0.0.0';
    var port = 8080;

    new WebpackDevServer(webpack(webpackConfig), {
      hot: true,
      publicPath: webpackConfig.output.publicPath,
      quiet: false,
      noInfo: false,
      stats: { colors: true }
    }).listen(port, host, function (err, result) {
      if (err) { console.log(err); }
      console.log('Hot server listening at '+ host +':'+ port);
    });
  });
}