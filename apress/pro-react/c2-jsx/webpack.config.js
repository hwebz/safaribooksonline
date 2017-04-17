var webpack = require("webpack");
var path = require("path");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var extractScss = new ExtractTextPlugin("css/all.bundle.css");

var config = {
    devtool: "source-map",
    entry: [
        path.resolve(__dirname + "/app/App.jsx"),
        path.resolve(__dirname + "/app/scss/App.scss")
    ],
    output: {
        path: path.resolve(__dirname + "/public"),
        filename: "js/all.bundle.js",
        publicPath: "/public"
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: "babel-loader",
                exclude: /node_modules/,
                query: {
                    presets: ["es2015", "react"]
                }
            },
            {
                test: /\.scss$/,
                loader: extractScss.extract({
                    fallback: "style-loader",
                    use: [
                        {
                            loader: "css-loader"
                        },
                        {
                            loader: "sass-loader",
                            options: {
                                includePaths: [
                                    path.resolve(__dirname + "/app/scss"),
                                    path.resolve(__dirname + "/node_modules/bootstrap/scss")
                                ]
                            }
                        }
                    ]
                })
            }
        ]
    },
    devServer: {
        contentBase: path.resolve(__dirname),
        historyApiFallback: true,
        inline: true
    },
    plugins: [
        extractScss
    ]
};

if (process.env.NODE_ENV === "production") {
    config.devtool = false;
    config.plugins = [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({comments: false}),
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify("production")
            }
        })
    ]
}

module.exports = config;