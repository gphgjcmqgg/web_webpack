/*
  loader: 1.下载  2.使用（配置loader）
  plugins：1.下载   2.引入  3.使用

*/
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { resolve } = require("path");

module.exports = {
  mode:'development',
  // mode: 'production'
  entry:'./src/index.js', // 入口起点
  output: {
    filename:'built.js',
    path: resolve(__dirname, 'build') // __dirname nodejs变量，代表当前文件(webpack.config.js)的目录绝对路径
  },
  // loader配置
  module: {
    rules: [
      {
        test: /\.less$/,
        // 要使用多个loader 处理用use
        use: [
          'style-loader',
          'css-loader',
          'less-loader'
        ]
      },
      {
        test: /\.(jpg|png|gif)$/,
        // 使用一个loader
        // 下载url-loader file-loader
        loader: 'url-loader',
        options:{
          // 图片大小小于8kb，就会被base64处理
          // 优点: 减少请求数量（减轻服务器压力）
          // 缺点：图片体积会更大（文件请求速度更慢）
          limit: 8 * 1024,
          // esModule: false,
          // 给图片进行重命名
          // [hash:10]取图片的hash 的前10 位
          // [ext]取文件原来扩展名
          name: '[hash:10].[ext]'
        }
      },
      {
        test: /\.html$/,
        // 处理html 文件的img 图片（负责引入img，从而能被url-loader 进行处理）
        loader: 'html-loader'
      }
    ]
  },
  plugins: [
    // plugins的配置
    // html-webpack-plugin
    // 功能：默认会创建一个空的HTML，自动引入打包输出的所有资源（JS/CSS）

    // 需要有结构的HTML 文件
    new HtmlWebpackPlugin(
      {
        template: './src/index.html'
      }
    )
  ]
}