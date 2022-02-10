module.exports = {
    pages: {
        index: {
            entry: 'src/main.js'
        }
    },
    devServer: {
        proxy: {
            '/booker': {
                target: 'http://simwor.com:8888',
                pathRewrite: {'^/booker': ''},
                ws: true,
                changeOrigin: true
            }
        }
    }
}