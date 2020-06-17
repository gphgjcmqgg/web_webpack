/*
  webpack.config.js    webpack配置文件
    作用：指示webpack干哪些活（当你运行webpack指令时，会加载里面的配置）

    所有构建工具都是基于node.js平台运行的~模块化默认采用commonjs
*/

// resolve 用来拼接绝对路径的方法
const { resolve } = require("path");
// commonjs语法
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
      // 详细loader配置
      // 不同文件必须配置不同loader 处理
      {
        // 匹配哪些文件
        test: /\.css$/,
        // 使用哪些loader
        use: [
          // use 数组中loader 执行顺序：从右到左，从下到上依次执行
          // 创建style 标签，将js 中的样式资源插入进行，添加到head 中生效
          'style-loader',
          // 将css 文件变成commonjs 模块加载js 中，里面内容是样式字符串
          'css-loader'
        ]
      }, {
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader',
          // 将less 文件编译成css 文件
          // 需要下载less-loader 和less
          'less-loader'
        ]
      }
    ]
  },
  plugins: [],
}