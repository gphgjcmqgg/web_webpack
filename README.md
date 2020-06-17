# web_webpack

webpack 是一种前端资源构建工具，一个静态模块打包器(module bundler)。
在webpack 看来, 前端的所有资源文件(js/json/css/img/less/...)都会作为模块处理。
它将根据模块的依赖关系进行静态分析，打包生成对应的静态资源(bundle)。

处理好的资源输出出去叫bundle
chunk -- 代码块

## webpack 五个核心概念

1. Entry
  入口(Entry)指示webpack 以哪个文件为入口起点开始打包，分析构建内部依赖图。

2. Output
  输出(Output)指示webpack打包后的资源bundles输出到哪里去，以及如何命名。

3. Loader
  Loader让webpack能够去处理那些非JavaScript文件(webpack 自身只理解JavaScript)

4. Plugins
  插件(Plugins)可以用于执行范围更广的任务。插件的范围包括，从打包优化和压缩，一直到重新定义环境中的变量等。

5. Mode
  模式(Mode)指示webpack 使用相应模式的配置。
  （1） development
      会将DefinePlugin 中process.env.NODE_ENV 的值设置为development。启用NamedChunksPlugin 和
    NamedModulesPlugin

  （2） production
      会将DefinePlugin 中process.env.NODE_ENV 的值设置为production。启用FlagDependencyUsagePlugin,
    FlagIncludedChunksPlugin, ModuleConcatenationPlugin,NoEmitOnErrorsPlugin, OccurrenceOrderPlugin,
    SideEffectsFlagPlugin 和TerserPlugin


