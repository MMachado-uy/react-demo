var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: {
        index: './src/index.js',
        styles: './src/styles.js'
    },
    output: {
        path: path.resolve('docs'),
        filename: '[name].bundle.js'
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015', 'stage-2'],
                    compact: true,
                    sourceMap: true
                },
            },
            {
                test: /\.scss$/,
                use: [
                  MiniCssExtractPlugin.loader,
                  "css-loader",
                  "sass-loader"
                ]
              },
            {
                test: /\.(ico|jpg|jpeg|png|gif|webp|svg)(\?.*)?$/,
                loader: 'file-loader',
                query: {
                    name: 'media/[name].[ext]',
                    compact: true
                }
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2|otf)$/,
                loader: 'file-loader',
                query: {
                    name: 'fonts/[name].[ext]'
                }
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
        }),
        new HtmlWebpackPlugin({
            template: 'index.html',
            filename: 'index.html',
            inject: 'body'
        }),
        new MiniCssExtractPlugin({
          filename: "[name].css",
          chunkFilename: "[id].css"
        })
    ],
    stats: {
        colors: true,
        modules: true,
        reasons: true,
        errorDetails: true
    }
}