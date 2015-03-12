var webpack = require('webpack');
var webpackConfig = require('./webpack.development');

webpackConfig.entry.app.unshift('webpack-dev-server/client?http://0.0.0.0:8080',
  'webpack/hot/dev-server');

webpackConfig.plugins = [
  new webpack.DefinePlugin({
    NODE_ENV: JSON.stringify('development')
  }),
  new webpack.NoErrorsPlugin()
];

webpackConfig.module.loaders[0] = { test: /\.jsx$/, exclude: /node_modules/, loaders: ['react-hot', 'babel'] };

module.exports = webpackConfig;
