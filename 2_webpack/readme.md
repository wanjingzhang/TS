// 1. 初始化npm
npm init -y 

// 2.安装开发依赖 -D savedev
cnpm i -D

// 3. 安装4个依赖
cnpm i -D webpack webpack-cli typescript ts-loader

// 4. webpack.config.js 配置文件
module.exports{}

// 5. ts配置
"compilerOptions": {}

// 6. 添加package.json编译命令
"build": "webpack",

// 7. 打包项目
npm run build 

// 8. 添加web自动生成的html模版
cnpm i -D html-webpack-plugin
plugins:[new HTMLWebpackPlugin(),]

// 9. 添加webpack服务器,自动刷新
cnpm i -D webpack-dev-server
"start":"webpack serve --open chrome.exe",

// 10. 在编译前删除旧文件
cnpm i -D clean-webpack-plugin

// 11. 告诉ts哪些文件可以作为模块使用
resolve:{extensions:['.ts','.js']}

// 12.安装babel 核心|预置不同的环境|babel和webpack结合的工具|模拟js运行环境，老版本浏览器运行的新js的技术
cnpm i -D @babel/core @babel/preset-env babel-loader core-js