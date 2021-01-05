const path = require('path');

const NODE_MODULES = path.join(__dirname, 'node_modules');
const APP_DIR = path.join(__dirname, '../src');

module.exports = {
    // By default its value is ./src/index.js
    entry: path.resolve(__dirname, '../src/index.js'),
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: '[name].[contenthash:8].js',
        publicPath: '',
    },
    module: {
        rules: [
            {
                test: /\.(png|gif|jpg|svg)$/,
                exclude: NODE_MODULES,
                loader: 'file-loader',
            },
        ],
    },
    resolve: {
        extensions: ['*', '.js', '.jsx'],
        alias: {
            '~app': path.resolve(APP_DIR),
            '~components': path.resolve(APP_DIR, 'library/components/'),
            '~utils': path.resolve(APP_DIR, 'library/utils/'),
            '~main': path.resolve(APP_DIR, 'main/'),
            '~store': path.resolve(APP_DIR, 'main/store/'),
            '~modules': path.resolve(APP_DIR, 'modules/'),
            '~styles': path.resolve(APP_DIR, 'resources/styles/'),
        },
    },
};
