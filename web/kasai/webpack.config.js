var webpack = require('webpack');
var path = require('path');
var BUILD_DIR = path.resolve(__dirname, 'src/client/public');
var APP_DIR = path.resolve(__dirname, 'src/client/app');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './src/client/index.html',
  filename: 'index.html',
  inject: 'body'
})

const ExtractTextPluginConfig = new ExtractTextPlugin('style.bundle.css')

var config = {
    entry: '../kasai/src/app/index.jsx',
    output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
    },
    module : {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: [
            'babel-loader',
          ],
        },
        {
          test: /\.css$/,
          loader: ExtractTextPlugin.extract({
            use: 'css-loader',
          }),
        },
        {
          test: /\.(png|jpg|gif)$/,
          use: [
            'file-loader',
          ],
        },
      ],
    },
    resolve: {
      extensions: ['.js', '.jsx'],
    },
    devServer: {
      inline:true,
      port: 9000
    },
    plugins: [HtmlWebpackPluginConfig, ExtractTextPluginConfig]
};
module.exports = config;