var path = require('path'),
  webpack = require('webpack'),
  HtmlwebpackPlugin = require('html-webpack-plugin');

module.exports = {
  context: path.join(__dirname, 'src'),
  entry: './index',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  devServer: {
    inline: true,
    hot: true,
    stats: 'errors-only'
  },
  //module: {
  //  loaders: [
  //    {
  //      test: /\.js$/,
  //      include: path.join(__dirname, 'src'),
  //      loader: 'babel'
  //    }
  //  ]
  //},
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlwebpackPlugin({
      template: './index.html'
    })
  ]
};