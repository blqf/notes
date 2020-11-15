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
          'css-loader'//导出css字符串
        ]
      },
      {
        test: /\.jpg$/,
        use: [
          {
            loader: 'file-loader',//生成图片文件
            options: {
              name: 'images/[name]-[hash:5].[ext]'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebapckPlugin({//生辰html文件
      template: './public/index.html',
      filename: 'html/index.html',
      chunks: ['index']
    }),
    new MiniCssExtractPlugin({//生成css文件
      filename: "css/[name]-[contenthash:5].css",
    }),
    new copyWebpackPlugin({//copy静态资源，主要用于html页面直接引用图片的情况
      patterns: [
        { from: './public', to: './' }
      ]
    }),
    new CleanWebpackPlugin()
  ]
}