const {defineConfig} = require('@vue/cli-service')
const path = require.resolve('path-browserify')
const {resolve: pathResolve} = require('path')
const i18nAutoPlugin = require('i18n-auto-webpack/plugin')

const i18nAutoLoaderOptions = {
    watch: true,
    name: 'i18n.t',
    dependency: {
        name: 'i18n',
        value: '@/i18n/index.js'
    },
    includes: [pathResolve('./src')], // 只处理src目录下的文件
    transform: true
}


module.exports = defineConfig({
    transpileDependencies: true,

    configureWebpack: {
        resolve: {
            fallback: {
                "path": require.resolve("path-browserify")
            }
        },
        plugins: [
            new i18nAutoPlugin({
                watch: true,
                sourceMap: {
                    on: true,
                    path: './src/i18n/auto'
                },
            })
        ],
        // module: {
        //     rules: [
        //         {
        //             test: /\.vue$/,
        //             resourceQuery: /type=template/,
        //             enforce: 'post',
        //             loader: 'i18n-auto-webpack/loader',
        //             options: i18nAutoLoaderOptions
        //         }

        //     ]
        // },
    },

    chainWebpack: config => {
        config.module
            // 这个规则会针对项目里用到的js文件、vue文件里的tempalte部分和script部分
            .rule('js')
                .use('i18n-auto-loader')
                    .loader('i18n-auto-webpack/loader')
                    .options(i18nAutoLoaderOptions)
                    .before('babel-loader')
                    .end()
                .end()
    }
})
