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
      exclude: ['favicon.png'],
      watch: true
    }),
    new HtmlWebpackPlugin({
      inject: false,
      template: require('html-webpack-template'),
      appMountId: 'app',
      mobile: true,
      title: 'Guitar Mix n Pick',
      links: [
        {
          href: '/favicon.png',
          rel: 'icon',
          sizes: '48x48',
          type: 'image/png'
        }
      ]
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
