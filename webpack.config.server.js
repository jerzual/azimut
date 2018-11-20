var webpack = require('webpack');
var path = require('path');
var pkg = require('./package.json');

var nodeModules = {};

Object.keys(pkg.dependencies).forEach(function(mod) {
  nodeModules[mod] = 'commonjs ' + mod;
});

module.exports = {
  entry: [
    // 'webpack/hot/poll?1000',
    './src/server/index.ts',
  ],
  target: 'node',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'server.bundle.js',
  },

  // Enable sourcemaps for debugging webpack's output.
  devtool: 'source-map',

  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: ['.ts', '.js'],
  },
  // don't treat require node libs as modues to include.
  externals: nodeModules,

  module: {
    rules: [
      // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
      {
        test: /\.ts$/,
        use: [{ loader: 'ts-loader' }],
        exclude: [/node_modules/, /test/, /__tests__/],
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.pug$/,
        use: [{ loader: 'pug-loader' }],
        exclude: /node_modules/,
      },
    ],
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
    }),
    // new webpack.HotModuleReplacementPlugin()
  ],
};
