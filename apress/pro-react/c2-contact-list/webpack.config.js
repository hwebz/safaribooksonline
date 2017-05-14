var webpack = require("webpack");
var path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const extractSass = new ExtractTextPlugin("css/all.bundle.css");

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
        rules: [
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
                use: extractSass.extract({
                    use: [{
                        loader: "css-loader"
                    }, {
                        loader: "sass-loader",
                        options: {
                            includePaths: [
                                path.resolve(__dirname + "/app/scss"), 
                                path.resolve(__dirname + "/node_modules/bootstrap/scss")
                            ]
                        }
                    }],
                    // use style-loader in development
                    fallback: "style-loader"
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
        extractSass
    ]
};

module.exports = config;