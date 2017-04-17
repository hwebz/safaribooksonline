var webpack = require("webpack");

var config = {
    devtool: "eval-source-map",
    entry: [
        __dirname + "/app/App.jsx"
    ],
    output: {
        path: __dirname + "/public",
        filename: "bundles.js",
        publicPath: "/public"
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loaders: "babel-loader",
                query: {
                    presets: ["es2015", "react"]
                }
            }
        ]
    },
    devServer: {
        contentBase: __dirname,
        historyApiFallback: true,
        inline: true
    }
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