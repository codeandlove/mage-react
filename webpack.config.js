const path = require('path');
const webpack = require('webpack');

module.exports = {
    context: path.resolve(__dirname + '/client'),
    entry: [
        'react-hot-loader/patch', // RHL patch
        'webpack-hot-middleware/client?reload=true',
        './index.js'
    ],
    output: {
        path: path.resolve(__dirname + '/www'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    'babel-loader'
                ]
            },
            // Load images.
            {
                test: /\.(gif|jpe?g|png)$/,
                loader: 'url-loader?limit=25000',
                query: {
                    limit: 10000,
                    name: 'www/assets/[name].[hash:8].[ext]'
                }
            },
            {
                test: /\.scss$/,
                loaders: ['style-loader', 'css-loader', 'sass-loader', 'resolve-url-loader?sourceMap', 'sass-loader?sourceMap'],
                include: path.resolve(__dirname, '../../')
            },
            {
                test: /\.css$/,
                loader: 'style!css?importLoaders=1'
            },
            // Fonts
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'url-loader?limit=10000&mimetype=application/font-woff',
                query: {
                    name: 'www/assets/fonts/[name].[hash:8].[ext]'
                }
            }
        ]
    },
    resolve: {
        modules: [
            path.join(__dirname, 'node_modules')
        ]
    },
    devServer: {
        // Don't refresh if hot loading fails. Good while
        // implementing the client interface.
        hotOnly: true

        // If you want to refresh on errors too, set
        // hot: true,
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
};