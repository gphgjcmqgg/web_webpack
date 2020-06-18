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
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        // 排除css/js/html 资源
        exclude: /\.(css|js|html)$/,
        loader: 'file-loader',
        options:{
          // 给图片进行重命名
          // [hash:10]取图片的hash 的前10 位
          // [ext]取文件原来扩展名
          name: '[hash:10].[ext]'
        }   
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