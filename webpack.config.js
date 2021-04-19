// Generated using webpack-cli http://github.com/webpack-cli
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: __dirname + './src/index.js',
    output: {
        path: __dirname + '/dist',
        filename: '[name].bundle.js',
        publicPath: '/'
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'Webpack Index',
            template: __dirname + '/src/pages/index.html',
            inject: 'body',
            filename: 'index.html'
        }),
        new HtmlWebpackPlugin({
            title: 'Webpack News',
            template: __dirname + '/src/pages/news.html',
            inject: 'body',
            filename: 'news.html'
        }),
        new HtmlWebpackPlugin({
            title: 'Webpack Photo',
            template: __dirname + '/src/pages/photo.html',
            inject: 'body',
            filename: 'photo.html'
        }),
        new HtmlWebpackPlugin({
            title: 'Webpack Rozklad',
            template: __dirname + '/src/pages/rozklad.html',
            inject: 'body',
            filename: 'rozklad.html'
        }),

        // Add your plugins here
        // Learn more obout plugins from https://webpack.js.org/configuration/plugins/
    ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
    open: true,
  },

    module: {
        rules: [
        ],
    },
};
