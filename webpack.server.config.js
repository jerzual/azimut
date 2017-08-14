var webpack = require('webpack');
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin')
var path = require('path');
var pkg = require('./package.json');

var nodeModules = {};

Object
    .keys(pkg.dependencies)
    .forEach(function (mod) {
        nodeModules[mod] = 'commonjs ' + mod;
    });

module.exports = {
    entry: [
        'webpack/hot/poll?1000',
        './src/server/index.ts',
    ],
    target: 'node',
    output: {
        path: path.join(__dirname, "dist"),
        filename: "server.bundle.js"
    },

    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js"]
    },
    // don't treat require node libs as modues to include.
    externals: nodeModules,

    module: {
        rules: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            {
                test: /\.tsx?$/,
                use: [ { loader: "awesome-typescript-loader"} ],
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                use: [ "style-loader","css-loader","sass-loader" ],
                exclude: /node_modules/
            },
            {
                test: /\.pug$/,
                use:  [ { loader: "pug-loader" } ],
                exclude: /node_modules/
            }
        ],
    },

    // When importing a module whose path matches one of the following, just
    // assume a corresponding global variable exists and use that instead.
    // This is important because it allows us to avoid bundling all of our
    // dependencies, which allows browsers to cache those libraries between builds.
    /*externals: {
        "react": "React",
        "react-dom": "ReactDOM",
        "three": "THREE"
},*/
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
        }),
        /*
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                unused: true,
                dead_code: true,
                warnings: false
            },
            // sourceMap: false
        }),
        */
        new webpack.HotModuleReplacementPlugin()
    ]
};
