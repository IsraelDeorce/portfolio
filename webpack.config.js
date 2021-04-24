const path = require('path');
// https://webpack.js.org/guides/
// html-webpack-plugin: it loads our HTML files and it injects the bundle(s) in the same file
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin')
// in webpack.config.js we can change how webpack behaves by adding or altering:
// entry -> the default is src/index.js
// output -> the default is dist
// loaders -> 
// plugins
// code splitting

// EX: entry: { index: path.resolve(__dirname, 'source', 'index.js') }

// We can define the rules attribute use to be an array with list of loaders as
// we are using, or an object like this: { loader: 'my-loader' options: { } }
module.exports = {
  // Our index file
  entry: './src/index.js',
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.ejs',
      favicon: './src/assets/wolf.ico'
    }),
    new ESLintPlugin()
  ],
  // Where we put the production code
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  // Defines default optimizations depending on mode
  mode: 'development', 
  // Config for webpack-dev-server module
  devServer: {
    open: false, // opens the browser automatically
    contentBase: path.join(__dirname, 'dist'), // choses content
    port: 9000,
    historyApiFallback: true // will redirect 404s to /index.index
  },
  module: {
    rules: [
      // Allows use javascript
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/, // Don't test node_modules folder
        use: ['babel-loader'],
        resolve: { extensions: ['.js', '.jsx'] }
      },
      // Allows use of CSS
      { test: /\.css$/i, use: ['style-loader', 'css-loader'] },
      // Allows use of SASS
      { test: /\.s[ac]ss$/i, use: ['style-loader', 'css-loader', 'sass-loader'] },
      // Allows use of images
      { test: /\.(png|svg|jpg|jpeg|gif)$/i, type: 'asset/resource' },
      // Extracts source maps. 3rd-party libraries having their own source maps.
      { test: /\.js$/, enforce: 'pre', use: ['source-map-loader'] },
    ]
  }
}