const express = require('express');
const path = require('path');
const port = process.env.PORT || 8080;
const bodyParser = require('body-parser');
const compression = require('compression');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require("webpack-hot-middleware");
const webpack = require('webpack');
const webpackConfig = require('../webpack.config.js');
const app = express();

const Magento = require('./api/magento');

const compiler = webpack(webpackConfig);

app.use(express.static(path.resolve(__dirname + '/../www')));

// gZip compression
app.use(compression());

// Body parser to req
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Magento Node api
Magento(app);

app.use(webpackDevMiddleware(compiler, {
    hot: true,
    filename: 'bundle.js',
    publicPath: '/',
    stats: {
        colors: true
    },
    historyApiFallback: true
}));

app.use(webpackHotMiddleware(compiler));

app.listen(port, function(err) {
    if (err) {
        console.log(err);
    }

    console.info('The magic is happening on port', port);
});