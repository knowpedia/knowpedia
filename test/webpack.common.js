const KnowpediaLoaderPlugin = require('knowpedia/loader-plug/index.js');
const path = require('path');

module.exports = {
    entry: ['./src/entry.js'],
    output: {
        path: __dirname,
        filename: 'build/main.js'
    },
    // resolve: {
    //     alias: {
    //         'knowpedia': path.resolve('../dist/knowpedia.js')
    //     }
    // },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: "babel-loader"
        }, {
            test: /\.paper$/,
            exclude: /node_modules/,
            loader: ['knowpedia/loader/index.js']
        }, {
            test: /\.(png|jpg|jpeg|gif|bmp)$/,
            loader: [{
                loader: "url-loader",
                options: {
                    name: "build/[path][name].[ext]",
                    context: "src/asset",
                    limit: 5000
                }
            }]
        }, {
            test: /\.(css|scss)$/,
            loader: ['knowpedia/style-loader/index.js', 'css-loader', 'postcss-loader', './scss-loader.js']
        }]
    },
    plugins: [
        new KnowpediaLoaderPlugin()
    ]
};
