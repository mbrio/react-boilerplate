var webpack = require('webpack');
var path = require('path')

module.exports = {
  target: 'web',
  debug: true,
  devtool: 'eval',
  entry: {
    app: [
      './src/init'
    ]
  },
  output: {
    path: path.join(__dirname, 'build/js/'),
    publicPath: '/js/',
    filename: '[name].js'
  },
  plugins: [
    new webpack.DefinePlugin({
      NODE_ENV: JSON.stringify('development')
    })
  ],
  resolve: {
    modulesDirectories: ['node_modules'],
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      { test: /\.jsx$/, exclude: /node_modules/, loaders: ['react-hot', 'babel'] },
      { test: /\.less$/, loader: 'style!css!less' },
      { test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,   loader: "url?limit=10000&minetype=application/font-woff" },
      { test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,   loader: "url?limit=10000&minetype=application/font-woff" },
      { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,    loader: "url?limit=10000&minetype=application/octet-stream" },
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,    loader: "url?limit=10000&minetype=image/svg+xml" },
      { test: /\.png(\?v=\d+\.\d+\.\d+)?$/,    loader: "url?limit=10000&minetype=image/png" },
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,    loader: "file" },
      { test: /\.jpg(\?v=\d+\.\d+\.\d+)?$/,    loader: "file" },
      { test: /\.gif(\?v=\d+\.\d+\.\d+)?$/,    loader: "file" }
    ]
  }
};
