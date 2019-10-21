const path = require('path');
// 在内存中，根据指定的模板页面，生成一份内存中的首页，同时自动把
// 打包好的output.bundles.js注入到页面底部
// 配置插件需要在对象中挂载一个plugins节点
const htmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
    entry:'./src/main.js',
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'output.bundle.js'
    },
    mode:'development',
    plugins:[  // 所有webpack插件的配置节点
        new htmlWebpackPlugin({
            // 指定模板文件路径
            template:path.resolve(__dirname,'./src/index.html'),
            // 设置生成的内存页面的名称
            filename:'index.html'
        }),
        // 为 .vue  文件配置加载器，只支持原生js
        new VueLoaderPlugin()
    ],
    module:{  // 配置所有第三方loader模块
        rules:[  // 第三方模块的匹配规则
            {  // 处理css文件的loader
                test:/\.css$/,
                use:['style-loader','css-loader'] 
            },
            {
                test:/\.less$/,
                use:['style-loader', 'css-loader', 'less-loader']  
            },
            {
                test:/\.scss$/,
                use:['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test:/\.vue$/,
                use: ['vue-loader']
            },
            {test:/\.(ttf|eot|svg|woff|woff2)$/,use:'url-loader'},
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                    presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    },
    resolve:{
        alias: {  // 修改vue被导入时候报的路径
            // 'vue$':'vue/dist/vue.js'
        }
    }
}