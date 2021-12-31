module.exports = {
    devServer: {
        proxy: {
            '/api': {
                // target: 'http://127.0.0.1:8081',
                target: 'http://127.0.0.1:26666',  //后端地址
                ws: true,
                changeOrigin: true,
                pathRewrite: {
                    '^/api': '',
                }
            },
        }
    },
}
