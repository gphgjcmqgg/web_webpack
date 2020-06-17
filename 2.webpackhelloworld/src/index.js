/*
  index.js:webpack 入口起点文件

  1.运行指令：
    开发环境：webpack ./src/index.js -o ./build/build.js --mode=development
    生产环境：webpack ./src/index.js -o ./build/build.js --mode=production
  
  结论：
    1. webpack 能够编译打包js 和json 文件。
    2. 能将es6 的模块化语法转换成浏览器能识别的语法。
    3. 能压缩代码。

   问题
    不能编译打包css、img 等文件。
    不能将js 的es6 基本语法转化为es5 以下语法 
*/
import data from './data.json';
// import './index.css';

console.log(data);

function add(x, y) {
  return x + y;
}

console.log(add(1,2));