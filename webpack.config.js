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
        vendor: ["babylonjs", "react", "react-dom", "socket.io-client", "redux", "redux-socket.io"]
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
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            {
                test: /\.tsx?$/,
                use:  [ { loader: "awesome-typescript-loader" } ],
                exclude: /node_modules|server/
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
    plugins: plugins
};

module.exports = config;
