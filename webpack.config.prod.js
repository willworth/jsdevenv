import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
export default {
  debug: true,
  devtool: 'source-map',  //recommended for prod
  noInfo: false,
  entry: {
    vendor: path.resolve(__dirname, 'src/vendor'),
    main: path.resolve(__dirname, 'src/index')
  },
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: '[name].js'
  },
  plugins: [
     // Use CommonsChunkPlugin to create a separate bundle
    // of vendor libraries so that they're cached separately.
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor'
    }),
    // Create HTML file that includes reference to bundled JS.
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true
      },
      inject: true
}),






    //eliminate duplicate packages when generating bundle
    new webpack.optimize.DedupePlugin(),
    //minify
    new webpack.optimize.UglifyJsPlugin()

  ],
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loaders: ['babel']},
      {test: /\.css$/, loaders: ['style','css']}
    ]
  }
}
