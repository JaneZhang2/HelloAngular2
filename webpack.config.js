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
    stats: 'errors-only',
    port: 1234
  },
  //resolve: {
  //  alias: {
  //    //'es6-shim': "es6-shim/es6-shim.min.js",
  //    //'angular2-polyfills': 'angular2/bundles/angular2-polyfills.js',
  //    //'Rx': 'rxjs/bundles/Rx.umd.js'
  //    //'ng': 'angular2/bundles/angular2-all.umd.js'
  //  }
  //},
  module: {
    //noParse:[
    //  /es6-shim/,
    //  /angular2-polyfills/,
    //  /Rx/,
    //  ///angular2/
    //],
    loaders: [
      {
        test: /\.js$/,
        include: path.join(__dirname, 'src'),
        loader: 'babel'
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlwebpackPlugin({
      template: './index.html'
    })
  ]
};
