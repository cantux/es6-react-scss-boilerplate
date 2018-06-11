const helpers = require('./helpers');
const webpackMerge = require('webpack-merge'); // used to merge webpack configs
const commonConfig = require('./webpack.common.js'); // the settings that are common to prod and dev

module.exports = function (options) {
  return webpackMerge(commonConfig(), {
    mode: 'production'
  })
};
