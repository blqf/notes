const HtmlWebapckPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const copyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  entry: {
    index: ['./src/index.js'],
  },
  output: {
    filename: 'js/[name]-[hash:5].js',
    publicPath: '/dist/',
    path: path.resolve(__dirname, 'dist')//这个属性在webpack5里面使必须使用的，不然clean-webpack-plugin不起作用
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader/* 或者用'style-loader', 二选一 */,
          'css-loader'
        ]
      },
      {
        test: /\.jpg$/,
        exclude: /node_modules/,/* 不解析正则匹配到的模块，可以是文件或文件夹，可以不写这个配置 */
        // 或
        // include: /src/,/* 只解析正则匹配到的模块，可以是文件或文件夹，可以不写这个配置 */
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'images/[name]-[hash:5].[ext]'
            }
          }
        ]
      }
    ],
    noParse: /jquery/ /* 不去解析正则匹配到的模块，可以不写这个配置 */
  },
  plugins: [
    new HtmlWebapckPlugin({
      template: './public/index.html',
      filename: 'html/index.html',
      chunks: ['index']
    }),
    new MiniCssExtractPlugin({
      filename: "css/[name]-[contenthash:5].css",
    }),
    new copyWebpackPlugin({
      patterns: [
        { from: './public', to: './' }
      ]
    }),
    new CleanWebpackPlugin()
  ]
}
