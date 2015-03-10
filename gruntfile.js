'use strict';

module.exports = function (grunt) {
  grunt.loadNpmTasks('grunt-webpack');
  grunt.loadNpmTasks('grunt-contrib-copy');

  var environment = process.env.NODE_ENV || 'development';
  var webpackConfig = require('./webpack.' + environment + '.config.js');

  grunt.initConfig({
    webpack: {
      config: webpackConfig,
      progress: true,
      stats: {
        colors: true
      }
    },
    copy: {
      assets: {
        files: [
          {
            expand: true,
            src: '**',
            cwd: 'src/assets/',
            dest: 'build/'
          }
        ]
      }
    }
  });

  grunt.registerTask('build:assets', [
    'copy:assets'
  ]);

  grunt.registerTask('build:js', [
    'webpack'
  ]);

  grunt.registerTask('build', [
    'build:assets',
    'build:js'
  ]);

  grunt.registerTask('default', ['server']);

  grunt.registerTask('server', function () {
    var done = this.async();
    var webpack = require('webpack');
    var WebpackDevServer = require('webpack-dev-server');
    var host = '0.0.0.0';
    var port = 8080;

    new WebpackDevServer(webpack(webpackConfig), {
      hot: true,
      publicPath: webpackConfig.output.publicPath,
      contentBase: webpackConfig.output.path,
      progress: true,
      debug: true,
      stats: { color: true }
    }).listen(port, host, function (err, result) {
      if (err) { console.log(err); }
      console.log('Hot server listening at '+ host +':'+ port);
    });
  });

  // TODO: ADD CLEAN
  // TODO: ADD SERVER
}