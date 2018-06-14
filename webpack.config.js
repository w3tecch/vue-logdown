const path = require("path");

module.exports = {
    entry: require.resolve("./src/index.js"),
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "vue-logdown.js"
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
