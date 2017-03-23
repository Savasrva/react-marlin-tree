const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: [
    './src/Tree'
  ],
  devtool: 'source-map',
  output: {
    path: __dirname + '/dist/',
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
          warnings: false
      },
      mangle: false,
      beautify: true,
      comments: true,
    }),

  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['react-hot', 'babel'],
        include: path.join(__dirname, 'src'),
      },
      {
        test: /\.css$/,
        loaders: [
          'style-loader',
          'css-loader'
        ],
      },
    ]
  },
  resolve: {
    root: path.resolve('./src')
  },
};
