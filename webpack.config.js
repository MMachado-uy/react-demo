var env
try {
    env = require('./env.js')
} catch (error) {
    env = {
        WEATHER_APPID: process.env.WEATHER_APPID,
        UNSPLASH_APPID: process.env.UNSPLASH_APPID,
        UNSPLASH_SECRET: process.env.UNSPLASH_SECRET,
        UNSPASH_CALLBACK: process.env.UNSPASH_CALLBACK,
        UNSPASH_AUTHORIZATION: process.env.UNSPASH_AUTHORIZATION,
        UNSPLASH_ACCESS: process.env.UNSPLASH_ACCESS
    }
}

for (let key in env) {
    if (env[key] === '' ||
        typeof env[key] === 'undefined' ||
        env[key] === null) {
        throw new Error('One or more of your environment variables are not defined. \nSolve this before building the project')
    }
}

var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve('docs'),
        filename: 'bundle.js'
    },
    devtool: 'source-map',
    module: {
        loaders: [
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
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
            'env': JSON.stringify(env)
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