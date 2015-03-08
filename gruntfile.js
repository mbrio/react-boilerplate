'use strict';

module.exports = function (grunt) {
  grunt.loadNpmTasks('grunt-jsxhint');
  grunt.loadNpmTasks('grunt-webpack');
  grunt.loadNpmTasks('grunt-contrib-copy');

  var webpackConfig = require('./webpack.dev.config.js');

  grunt.initConfig({
    webpack: {
      config: webpackConfig
    },
    jshint: {
      options: {
        esnext: true
      },
      all: [
        'src/*.jsx',
        'src/**/*.jsx'
      ]
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
    'jshint',
    'webpack'
  ]);

  grunt.registerTask('build', [
    'build:assets',
    'build:js'
  ]);

  grunt.registerTask('default', ['build']);
}