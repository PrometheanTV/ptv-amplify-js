const webpack = require('webpack');
const path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/app.js',
    output: {
        filename: 'ptvAmplify.bundle.js',
        path: path.resolve(__dirname, "dist"),
        globalObject: 'this',
        library: 'PtvAmplify',
        libraryTarget: 'umd'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/
            }
        ]
    },
    devServer: {
        contentBase: './dist',
        overlay: true,
        hot: true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
};