var webpack = require('webpack');
var webpackConfig = require('./webpack.production');

webpackConfig.debug = true;

webpackConfig.plugins = [
  new webpack.DefinePlugin({
    NODE_ENV: JSON.stringify('development')
  })
];

webpackConfig.module.preLoaders = [
  { test: /\.jsx$/, exclude: /node_modules/, loader: 'jsxhint' },
];

module.exports = webpackConfig;
