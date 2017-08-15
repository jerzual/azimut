var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin')
var path = require('path');
var pkg = require('./package.json');

var plugins = [
        new webpack.DefinePlugin({
            'process.env.PORT': process.env.PORT,
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
        }),
        new webpack.ProvidePlugin({
            BABYLON: "babylonjs"
        }),
        new HtmlWebpackPlugin({
            template: 'src/server/index.pug'
        }),
        new webpack.optimize.CommonsChunkPlugin({ name: 'vendor' }),
        
];
if(process.env.NODE_ENV === 'production'){
    plugins.push(
        new webpack.optimize.UglifyJsPlugin({
            compress: { unused: true, dead_code: true, warnings: false },
            // sourceMap: false
        })
    );
}else{
    // development plugins
    const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
    plugins.push(
        new BrowserSyncPlugin({
            // browse to http://localhost:3000/ during development, 
            // ./public directory is being served 
            host: 'localhost',
            port: 3000,
            // server: { baseDir: ['dist/www'] },
            
            proxy: {
                target: "http://localhost:5000",
                ws: true
            },
            // Modify the server request before it hits your application
            proxyReq: [
                function (proxyReq, req, res) {
                    console.log(proxyReq.headers);
                }
            ],
            proxyRes: [
                function (proxyRes, req, res) {
                    console.log(proxyRes.headers);
                }
            ]
        })
    );
}
const config =  {
    entry: {
        client: "./src/index.tsx",
        // server: "./src/server/index.ts",
        // test: "./test/index.ts",
        vendor: [
            "babylonjs",
            "react",
            "react-dom",
            "redux",
            "redux-socket.io",
            "socket.io-client",
            "tone",
            "rot.js",
        ]
    },
    output: {
        path: path.join(__dirname, "dist", "www"),
        filename: "[name].bundle.js"
    },

    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js"]
    },

    module: {
        rules: [
            // Typescript compiles to es6 then babel transpiles it to es5.
            {
                test: /\.tsx?$/,
                use:  [ "babel-loader", "awesome-typescript-loader" ],
                exclude: [/node_modules/, /src\/server/, /test/, /__tests__/]
            },
            {
                test: /\.scss$/,
                use:  [ "style-loader", "css-loader", "sass-loader" ],
                exclude: /node_modules/
            },
            {
                test: /\.pug$/,
                use:  [ { loader: "pug-loader" } ],
                exclude: /node_modules/
            }
        ],
    },

    plugins: plugins
};

module.exports = config;
