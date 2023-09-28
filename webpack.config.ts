import path from 'path';
import webpack from 'webpack';
import HTMLWebpackPlugin from "html-webpack-plugin";

module.exports = {
  mode: 'development', //production or development
  entry: path.resolve(__dirname, 'src', 'index.ts'), //root project file, __dirname - our current location
  output: {
    filename: '[name].[contenthash].js', //main file after building
    path: path.resolve(__dirname, 'build'),
    clean: true,
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, 'public', 'index.html')
    }),
    new webpack.ProgressPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
};