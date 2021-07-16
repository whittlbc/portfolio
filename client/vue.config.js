const path = require('path')

const IS_PROD = process.env.NODE_ENV === 'production'
const abspath = (p = '') => path.resolve(__dirname, p)

module.exports = {
    assetsDir: 'static',
    lintOnSave: false,
    outputDir: abspath('../server/public'),
    devServer: {
        proxy: {
            '/api': {
                target: 'http://localhost:8888',
                changeOrigin: true,
            }
        }
    },
    chainWebpack: config => {
        // https://cli.vuejs.org/guide/css.html#automatic-imports
        const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
        types.forEach(type => addStyleResource(config.module.rule('scss').oneOf(type)))

        if (IS_PROD) {
            config.plugin('copy').tap(([options]) => {
                options[0].ignore.push('js/dev/*')
                return [options]
            })
        }
    },
}

function addStyleResource (rule) {
    rule.use('style-resource')
        .loader('style-resources-loader')
        .options({
            patterns: [
                path.resolve(__dirname, './src/style/variables.scss'),
            ],
        })
}
