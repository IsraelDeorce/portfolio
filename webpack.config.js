const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ESLintPlugin = require('eslint-webpack-plugin')

const plugins = [
  new HtmlWebpackPlugin({
    template: './src/index.ejs',
    favicon: './src/assets/direwolf.svg'
  }),
  new ESLintPlugin()
]

const output = {
  filename: '[name].bundle.js',
  path: path.resolve(__dirname, 'dist')
}

const rules = [
  // Allows use of javascript
  {
    test: /\.(js|jsx)$/,
    exclude: /(node_modules)/, // Don't test node_modules folder
    use: ['babel-loader'],
    resolve: { extensions: ['.js', '.jsx'] }
  },
  { test: /\.css$/i, use: ['style-loader', 'css-loader'] }, // Allows use of CSS
  { test: /\.s[ac]ss$/i, use: ['style-loader', 'css-loader', 'sass-loader'] }, // Allows use of SASS
  { test: /\.(png|svg|jpg|jpeg|gif)$/i, type: 'asset/resource' }, // Allows use of images
  { test: /\.js$/, enforce: 'pre', use: ['source-map-loader'] }, // Extracts source maps. 3rd-party libraries having their own source maps.
]

const devServer = {
  static: {
    directory: path.join(__dirname, 'dist'),
  },
  allowedHosts: 'all',
  host: '0.0.0.0',
  port: 9000,
  historyApiFallback: true // will redirect 404s to /index.html
}

// In webpack.config.js we can change how webpack behaves by adding or changing:
// entry; output; loaders; plugins; code splitting
module.exports = {
  mode: 'development', // Defines default optimizations depending on mode
  entry: './src/index.js',
  plugins,
  output,
  devServer,
  module: { rules }
}
