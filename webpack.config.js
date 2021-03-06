const HtmlWebPackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: __dirname + "./dist"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      },
      {
          test:/\.(css|scss)$/,
          use: [
              'style-loader',
              'css-loader',
              'sass-loader'
          ]
      },
      {
          test: /\.(jpe?g|png|gif|eot|ttf|woff2?|otf)$/,
          use: 'file-loader'
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: "babel-loader"
          },
          {
            loader: "react-svg-loader",
            options: {
              jsx: true
            }
          }
         
        ]
      }
    ]
  },
  devtool: 'inline-source-map',
  devServer: {
      historyApiFallback: true,
      contentBase: '/dist'
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    })
  ]
};
