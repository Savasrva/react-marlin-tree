const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: [
    './src/index'
  ],
  devtool: 'source-map',
  output: {
    path: '/',
    filename: 'bundle.js'
  },
  devServer: {
    hot: true,
    port: 5000,
    filename: 'bundle.js',
    publicPath: '/',
    historyApiFallback: true,
    contentBase: './examples',
    stats: {
      assets: false,
      colors: true,
      version: false,
      hash: false,
      timings: false,
      chunks: false,
      chunkModules: false
    }
  },
  plugins: [
    new webpack.NoErrorsPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.EnvironmentPlugin([
            "NODE_ENV",
    ]),
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
