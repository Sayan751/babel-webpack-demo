const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = function(env, { analyze }) {
  const production = env.production || process.env.NODE_ENV === 'production';
  return {
    target: 'web',
    mode: production ? 'production' : 'development',
    devtool: production ? undefined : 'eval-cheap-source-map',
    entry: {
      entry: './src/main.js'
    },
    output: {
      clean: true,
      path: path.resolve(__dirname, 'dist'),
      filename: production ? '[name].[contenthash].bundle.js' : '[name].bundle.js'
    },
    resolve: {
      extensions: ['.js'],
    },
    devServer: {
      historyApiFallback: true,
      open: !process.env.CI,
      port: 9000
    },
    module: {
      rules: [
        { test: /\.js$/i, use: ['babel-loader'], exclude: /node_modules/ },
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({ template: 'index.html' }),
    ].filter(p => p)
  }
}