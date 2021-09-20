/*
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
};

*/

const html = require('html-webpack-plugin');


const path = require("path");

module.exports = {
  mode: "development",

  entry: {
    dom:"./src/dom.js",
    index: "./src/index.js",
    test: "./src/test.js"
  },
  devServer: {
    static: './dist',
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
};