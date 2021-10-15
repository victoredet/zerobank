module.exports = {
    devServer: {
      proxy: {
        '^/api': {
          target: 'http://localhost:5000',
          logLevel: 'debug',
          changeOrigin: true,
          pathRewrite: { '^/api':'/'},
        }
      }
    }
  }