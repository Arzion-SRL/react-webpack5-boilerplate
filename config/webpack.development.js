/* eslint-disable import/no-extraneous-dependencies */
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

const APP_DIR = path.join(__dirname, '../src');
const NODE_MODULES = path.join(__dirname, '../node_modules');

module.exports = {
    mode: 'development',
    devtool: 'eval-cheap-source-map',
    devServer: {
        contentBase: path.resolve(__dirname, '../dist'),
        historyApiFallback: { disableDotRule: true },
        hot: true,
        host: '0.0.0.0',
        port: 3000,
        open: { app: ['Google Chrome', '--incognito'] },
        overlay: {
            warnings: true,
            errors: true,
        },
    },
    module: {
        rules: [
            {
                test: /\.(less|css)$/,
                use: ['style-loader', 'css-loader', 'less-loader'],
                exclude: NODE_MODULES,
                include: APP_DIR,
            },
            {
                test: /\.(js|jsx)$/,
                exclude: NODE_MODULES,
                include: APP_DIR,
                use: [
                    {
                        loader: require.resolve('babel-loader'),
                        options: { plugins: [require.resolve('react-refresh/babel')] },
                    },
                ],
            },
        ],
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new ReactRefreshWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './public/index.ejs',
            templateParameters: { title: 'Development' },
        }),
        new webpack.DefinePlugin({
            PRODUCTION: JSON.stringify(false),
            VERSION: JSON.stringify('1234'),
            BACKEND_URL: JSON.stringify('https://reqres.in/api'),
        }),
    ],
};
