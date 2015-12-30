'use strict';

var path = require('path');
var webpack = require('webpack');

module.exports = {
    debug: true,
    devtool: 'source-map',
    entry: {
        'index.android': ['./src/main.android.js'],
    },
    externals: [],
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].js',
    },
    module: {
        preLoaders: [
            {
                test: /\.(js|jsx|es6)$/,
                include: path.resolve(__dirname, 'src'),
                loader: "eslint-loader"
            }
        ],
        loaders: [
            {
                test: /\.(js|jsx|es6)$/,
                include: [
                    path.resolve(__dirname, 'src'),
                    path.resolve(__dirname, 'node_modules/react-native-vector-icons')
                ],
                loader: 'babel',
                query: {
                    cacheDirectory: true,
                    presets: ['es2015', 'stage-1', 'react'],
                }
            }
        ]
    },
    plugins: [new webpack.NoErrorsPlugin()],
};
