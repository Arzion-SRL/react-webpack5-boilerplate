const { merge } = require('webpack-merge'); //[1]

const commonConfig = require('./config/webpack.common'); //[2]

console.log(commonConfig);

module.exports = (env) => {
    const config = require('./config/webpack.' + env.NODE_ENV); //[3]
    return merge(commonConfig, config); //[4]
};
