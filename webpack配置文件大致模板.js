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
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'images/[name]-[hash:5].[ext]'
            }
          }
        ]
      }
    ]
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

/* 
  html-webpack-plugin: 生成html文件

  less-loader: 转换less代码为css代码
  css-loader: 导出css字符串
  style-loader: 将字符串嵌入html文件的style标签 | mini-css-extract-plugin: 生成css文件

  file-loader: 生成文件,如图片
  url-loader: 生成路径,如图片
  copy-webpack-plugin: copy静态资源到dist目录，主要用于html文件直接引用图片的情况
*/