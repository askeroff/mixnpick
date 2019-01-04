const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, 'src/index.js'),
  mode: 'development',
  watch: true,
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.[contenthash].js'
  },
  plugins: [
    new CleanWebpackPlugin(['build'], {
      exclude: ['template.html'],
      watch: true
    }),
    new HtmlWebpackPlugin({
      inject: false,
      template: require('html-webpack-template'),
      appMountId: 'app',
      mobile: true,
      title: 'Guitar Mix n Pick'
    })
  ],
  resolve: {
    extensions: ['.jsx', '.js', 'json']
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  }
};
