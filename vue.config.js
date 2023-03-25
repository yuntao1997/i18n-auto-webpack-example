const {defineConfig} = require('@vue/cli-service')
const path = require.resolve('path-browserify')

const i18nAutoPlugin = require('i18n-auto-webpack/plugin')

const i18nAutoLoaderOptions = {
    watch: true,
    name: 'i18n.t',
    dependency: {
        name: 'i18n',
        value: '@/i18n/index.js'
    },
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
        module: {
            rules: [
                {
                    test: /\.vue$/,
                    resourceQuery: /type=template/,
                    enforce: 'post',
                    loader: 'i18n-auto-webpack/loader',
                    options: i18nAutoLoaderOptions
                }

            ]
        },
    }
})
