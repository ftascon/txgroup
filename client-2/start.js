const webpack = require('webpack');

const webpackConfig = require('./webpack.config');
const babelServerConfig = require('./.babelrc.server.json');

webpack(webpackConfig, (err, stats) => {
    require('@babel/register')(babelServerConfig);
    require('./src/server')
})
