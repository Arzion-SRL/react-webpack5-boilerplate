/* eslint-disable no-unused-vars */
/* eslint-disable key-spacing */
const currentTask = process.env.npm_lifecycle_event;

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const webpack = require('webpack');

const path = require('path');

const APP_DIR = path.join(__dirname, 'src');
const NODE_MODULES = path.join(__dirname, 'node_modules');

const config = {
    // By default its value is ./src/index.js
    // entry: path.resolve(__dirname, './src/index.js'),
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].[contenthash:8].js',
        publicPath: '',
    },
    module: {
        rules: [
            {
                test: /\.(less|css)$/,
                use: ['style-loader', 'css-loader', 'less-loader'],
                exclude: NODE_MODULES,
            },
            {
                test: /\.(js|jsx)$/,
                use: ['babel-loader'],
                include: APP_DIR,
                exclude: NODE_MODULES,
            },
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
    plugins: [],
};

/// currentTask == 'start' => Development Mode
if (currentTask === 'start') {
    config.mode = 'development';
    config.devtool = 'eval-cheap-source-map';
    config.plugins.push(
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: './public/index.ejs',
            templateParameters: { title: 'Development' },
        }),
        new webpack.DefinePlugin({
            PRODUCTION: JSON.stringify(false),
            VERSION: JSON.stringify('1234'),
            BACKEND_URL: JSON.stringify('https://reqres.in/api'),
        })
    );
    config.devServer = {
        contentBase: path.resolve(__dirname, './dist'),
        historyApiFallback: { disableDotRule: true },
        hot: true,
        host: '0.0.0.0',
        port: 3000,
        open: {
            app: ['Google Chrome', '--incognito'],
        },
        overlay: {
            warnings: true,
            errors: true,
        },
    };
}

/// currentTask == 'build' => Production Mode
if (currentTask === 'build') {
    config.mode = 'production';
    config.module.rules[0].use[0] = MiniCssExtractPlugin.loader;
    config.plugins.push(
        new MiniCssExtractPlugin({ filename: 'main.[contenthash:8].css' }),
        new CleanWebpackPlugin(),
        new WebpackManifestPlugin(),
        new HtmlWebpackPlugin({
            template: './public/index.ejs',
            templateParameters: { title: 'React Webpack' },
        }),
        new webpack.DefinePlugin({
            PRODUCTION: JSON.stringify(true),
            VERSION: JSON.stringify('1234'),
            BACKEND_URL: JSON.stringify('https://reqres.in/api'),
        })
    );
    config.optimization = {
        runtimeChunk: 'single',
        minimize: true,
        minimizer: [
            `...`,
            new CssMinimizerPlugin({
                minimizerOptions: {
                    preset: [
                        'default',
                        {
                            discardComments: { removeAll: true },
                        },
                    ],
                },
            }),
        ],
        splitChunks: {
            chunks: 'all',
            maxInitialRequests: Infinity,
            minSize: 20000,
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name(module) {
                        // get the name. E.g. node_modules/packageName/not/this/part.js
                        // or node_modules/packageName
                        const packageName = module.context.match(
                            /[\\/]node_modules[\\/](.*?)([\\/]|$)/
                        )[1];

                        // npm package names are URL-safe, but some servers don't like @ symbols
                        return `npm.${packageName.replace('@', '')}`;
                    },
                },
            },
        },
    };
}

module.exports = (env, options) => config;
