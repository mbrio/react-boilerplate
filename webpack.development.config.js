var webpack = require('webpack');
var path = require('path')

var environment = process.env.NODE_ENV || 'development';

module.exports = {
  target: 'web',
  debug: true,
  devtool: 'eval',
  entry: {
    app: [
      'webpack-dev-server/client?http://0.0.0.0:8080',
      'webpack/hot/dev-server',
      './src/init',
      './src/assets/index.html'
    ]
  },
  output: {
    path: path.join(__dirname, 'build'),
    publicPath: '/',
    filename: '[name].js'
  },
  jshint: {
    esnext: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      NODE_ENV: JSON.stringify(environment)
    }),
    new webpack.NoErrorsPlugin()
  ],
  resolve: {
    modulesDirectories: ['node_modules'],
    extensions: ['', '.js', '.jsx']
  },
  module: {
    preLoaders: [
      { test: /\.jsx$/, exclude: /node_modules/, loader: 'jsxhint' },
    ],
    loaders: [
      { test: /\.jsx$/, exclude: /node_modules/, loaders: ['react-hot', 'babel'] },
      { test: /\.less$/, loader: 'style!css!less' },
      { test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: "file" },
      { test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, loader: "file" },
      { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "file" },
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "file" },
      { test: /\.png(\?v=\d+\.\d+\.\d+)?$/, loader: "file" },
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file" },
      { test: /\.jpg(\?v=\d+\.\d+\.\d+)?$/, loader: "file" },
      { test: /\.gif(\?v=\d+\.\d+\.\d+)?$/, loader: "file" },
      { test: /\.html(\?v=\d+\.\d+\.\d+)?$/, exclude: /node_modules/, loader: "file?name=[path][name].[ext]&context=src/assets" }
    ]
  }
};
