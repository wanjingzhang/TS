// 引入一个包
const path = require('path');
// 引入html插件
const HTMLWebpackPlugin = require("html-webpack-plugin"); 
// 引入clean插件
const {CleanWebpackPlugin} = require("clean-webpack-plugin");

// webpack 中的所有配置信息都应该写在module.exports中
module.exports = {
    // 指定入口文件
    entry: "./src/index.ts",
    // 指定打包文件位置
    output:{
        path: path.resolve(__dirname,'dist'),
        filename:"bundle.js",
        // 告诉webpack不使用箭头函数
        environment:{
            arrowFunction:false
        }
    },
    // 指定webpack打包时要使用的模块
    module:{
        // 指定加载规则
        rules:[
            {
                // test 指定规则生效的文件，所有以ts结尾的文件
                test: /\.ts$/,
                // 要使用的loader
                use: [
                    {
                        loader:'babel-loader', // 指定加载器，
                        options:{
                            // 设置预定义的环境
                            presets:[
                                [
                                    // 指定环境的插件
                                    "@babel/preset-env",
                                    //配置信息
                                    {
                                        // 要兼容的目标浏览器
                                        targets:{
                                            "chrome":"88", // 浏览器需要兼任到chrome88
                                            "ie":"11",
                                        },
                                        // 指定的corejs的版本
                                        "corejs":"3",
                                        // 使用corejs的方式 usage按需加载
                                        "useBuiltIns":"usage"
                                    }
                                ]
                            ]
                        }
                    }, //配置选项多用复杂的
                    'ts-loader'
                ],
                // 要排除的文件
                exclude: /node-modules/
            }
        ]
    },
    mode:"development",
    // 配置Webpack插件
    plugins:[
        new CleanWebpackPlugin(),
        new HTMLWebpackPlugin({
            // title: "这是一个自定义的title"
            template: "./src/index.html"
        }),
    ],
    // 用来设置引用模块
    resolve:{
        extensions:['.ts','.js']
    }
    
}