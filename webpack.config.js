// The ultimate goal of html-webpack-plugin is twofold:
// it loads our HTML files
// it injects the bundle(s) in the same file
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

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
  // Where we put the production code
  output: { filename: 'main.js', path: path.resolve(__dirname, 'dist') },
  // Defines default optimizations depending on mode
  mode: 'development', 
  // Config for webpack-dev-server module
  devServer: {
    open: false, // opens the browser automatically
    contentBase: path.join(__dirname, 'dist'), // choses content
    port: 9000
  },
  module: {
    rules: [
      // Allows use javascript
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/, // Don't test node_modules folder
        use: { loader: "babel-loader" },
        resolve: { extensions: [".js", ".jsx"] }
      },
      // Allows use of CSS
      { test: /\.css$/i, use: ['style-loader', 'css-loader'] },
      // Allows use of SASS
      { test: /\.s[ac]ss$/i, use: ['style-loader', 'css-loader', 'sass-loader'] },
      // Allows use of images
      { test: /\.(png|jpg|gif)$/i, use: ['url-loader'] }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public', 'index.html')
    })
  ]
}