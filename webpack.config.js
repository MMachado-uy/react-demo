var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve('docs'),
        filename: 'bundle.js',
        sourceMapFilename: '[file].map'
    },
    devtool: 'source-map',
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: "babel-loader",
                query: {
                    presets: ['react', 'es2015', 'stage-2']
                }
            },
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                        options: { sourceMap: true }
                    },
                    {
                        loader: 'resolve-url-loader'
                    },
                    {
                        loader: 'sass-loader',
                        options: { sourceMap: true }
                    }
                ]
            },
            {
                test: /\.(ico|jpg|jpeg|png|gif|webp|svg)(\?.*)?$/,
                loader: 'file-loader',
                query: {
                    name: 'media/[name].[ext]'
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
        })
    ],
    stats: {
        colors: true,
        modules: true,
        reasons: true,
        errorDetails: true
      }
}