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
        extensions: ["", ".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
    },
    // don't treat require node libs as modues to include.
    externals: nodeModules,

    module: {
        loaders: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            {
                test: /\.tsx?$/,
                loader: "awesome-typescript",
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                loader: "style!css!sass",
                exclude: /node_modules/
            },
            {
                test: /\.pug$/,
                loader: "pug",
                exclude: /node_modules/
            }
        ],
        /*
                preLoaders: [
                    // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
                    {
                        test: /\.(js|ts)$/,
                        loader: "source-map-loader"
                    }
                ]
        */
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
        new webpack.ProvidePlugin({
            THREE: "three"
        }),
        new webpack.BannerPlugin('require("source-map-support").install();',
            {
                 raw: true, 
                 entryOnly: false
            }
            ),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                unused: true,
                dead_code: true,
                warnings: false
            },
            // sourceMap: false
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
};
