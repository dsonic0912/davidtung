const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function (app) {
    app.use(createProxyMiddleware(['/admin', '/api', '/assets'], {
        target: 'http://localhost:8000',
        pathRewrite: {
            '^/admin' : '/admin',
            '^/api': '/api',
            '^/assets': '/assets'
        }
    }))
}