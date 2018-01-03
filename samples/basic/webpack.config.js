const path = require('path');
const publicPath = '/'

var babelOptions = {

};

module.exports = {
    cache: true,
    entry: {
        main: './index.ts',
    },
    target: "node",
    output: {
        path: path.resolve(__dirname, './bin'),
        filename: '[name].js',
        chunkFilename: '[chunkhash].js'
    },
    module: {
        rules: [{
            test: /\.ts(x?)$/,
            exclude: [
                /node_modules/,
                /samples/,
            ],
            use: [
                {
                    loader: 'babel-loader',
                    options: babelOptions
                },
                {
                    loader: 'ts-loader'
                }
            ]
        }, {
            test: /\.js$/,
            exclude: [
                /node_modules/,
                /bin/,
            ],
            use: [
                {
                    loader: 'babel-loader',
                    options: babelOptions
                }
            ]
        }]
    },
    plugins: [
    ],
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
};
