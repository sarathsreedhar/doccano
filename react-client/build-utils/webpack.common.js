const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  // entry file for the application
  entry: './src/index.js',

  //   Webpack babel loader
  module: {
    rules: [
      {
        test: /\.(js|jsx)/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },

      {
        test: /\.(jpg|png|woff|woff2|svg|ico)$/,
        use: {
          loader: 'url-loader',
        },
      },
    ],
  },

  //   hot module plugin without refreshing page
  plugins: [
    new webpack.HotModuleReplacementPlugin(),

    new HtmlWebpackPlugin({
      title: 'React-client',
      template: './src/index.html',
      favicon: './src/favicon.png',
    }),
  ],

  //   output the application to dist folder
  output: {
    path: path.resolve(__dirname, '../', 'dist'),
    publicPath: '/',
    filename: '[name].[hash].js',
  },

  //   devserver setup
  devServer: {
    host: '0.0.0.0',
    port: 3010,
    
    open: true,
    overlay: {
      warnings: true,
      errors: true,
    },
    historyApiFallback: true,
    contentBase: './dist',
  },
};
