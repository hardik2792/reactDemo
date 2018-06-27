var webpack = require('webpack');
var path = require('path');
var BUILD_DIR = path.resolve(__dirname, 'public');
var APP_DIR = path.resolve(__dirname, 'src');

var config = {
                entry: APP_DIR + '/index.jsx',
                output: { path: path.resolve(__dirname, 'public'), filename: 'bundle.js' },
                module : {
                          rules : [{
                              test : /\.jsx?/,
                              include : APP_DIR,
                              use:[{
                                loader : 'babel-loader'
                              }]
                            }]
                        }
            };
module.exports = config;
