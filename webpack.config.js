const path = require("path");

module.exports = {
    entry: require.resolve("./src/index.js"),
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: 'vue-logdown.min.js',
        library: 'vue-logdown',
        libraryTarget: 'umd',
    },
    devtool: "source-map",
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: "babel-loader"
            }
        ]
    }
};
