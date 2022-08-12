const path = require('path');
const packageJSON = require(path.resolve(__dirname, 'package.json'));
const webpackConfig = require(path.resolve(__dirname, '../', '../', 'webpack', 'config.js'));

module.exports = {
   ...webpackConfig({ packageJSON }),
}