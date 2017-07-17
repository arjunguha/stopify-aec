// 'use strict';
const webpack = require("webpack");
const path = require("path");

module.exports = {
  output: { filename: "target/app.js" },
  context: __dirname,
  entry: "./target/Main.js",
  resolve: {
    alias: {
    	"browserfs": "../../../../BrowserFS/dist/node"
    }
  },
  externals: { gapi: "/Users/nicoleandrews/Documents/PLASMA Lab/stopify-benchmarks/java/example-app/gapi.js"},
  plugins: [
  new webpack.ProvidePlugin({
  	GoogleDriveFileSystem: "../../browserfs-candy/target/BrowserFSCandy.js",
   
  })
  ]
};