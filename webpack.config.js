const path = require('path');

module.exports = {
  entry: './frontend/drocsid.jsx',
  output: {
    path: path.resolve(__dirname, 'app', 'assets', 'javascripts', 'scss'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: [/\.jsx?$/],
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['@babel/env', '@babel/react'],
        },
      },
      
    ],
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx', '*'],
  },
};
