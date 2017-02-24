const webpack = require('webpack');

module.exports = {
  context: __dirname,
  entry: [
    "webpack-dev-server/client?http://0.0.0.0:8000",
    "webpack/hot/only-dev-server",
    './index.js' 
  ],
  output: {
    path: __dirname + '/__build__',
    filename: 'bundle.js',
  },
  module: {
    loaders: [{
        test: /\.js?$/,
        exclude: /node_modules/,
        loaders: ['react-hot','babel'],
        query: {
          presets: ['es2015', 'react']
        }
      }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
};
